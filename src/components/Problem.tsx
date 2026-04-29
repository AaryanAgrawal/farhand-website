'use client';

import React from 'react';
import { motion } from 'framer-motion';

const ease = [0.19, 1, 0.22, 1] as const;

const lineClass =
  'text-3xl md:text-5xl lg:text-6xl font-light leading-tight m-0';

export default function Problem() {
  return (
    <section className="bg-background py-16 md:py-24 lg:py-32">
      <div className="container max-w-[900px]">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease }}
          viewport={{ once: true, margin: '-80px' }}
          className={lineClass}
        >
          <strong className="font-medium text-foreground">
            You are a robotics company,
          </strong>
          <span className="text-light-gray/80"> not a service company.</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 1, ease }}
          viewport={{ once: true, margin: '-80px' }}
          className={`${lineClass} mt-6 md:mt-10`}
        >
          <strong className="font-medium text-foreground">
            Your customers need support
          </strong>
          <span className="text-light-gray/80">
            {' '}
            but you can&apos;t be everywhere.
          </span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1, ease }}
          viewport={{ once: true, margin: '-80px' }}
          className={`${lineClass} italic text-accent mt-8 md:mt-12`}
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          Let us help.
        </motion.p>
      </div>
    </section>
  );
}
