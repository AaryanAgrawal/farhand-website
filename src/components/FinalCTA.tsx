'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const ease = [0.19, 1, 0.22, 1] as const;

export default function FinalCTA() {
  return (
    <section className="bg-background py-16 md:py-24 lg:py-32">
      <div className="container max-w-[900px] text-center">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-3xl md:text-5xl lg:text-6xl font-light leading-tight m-0"
          style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}
        >
          Your robots are already deployed.
          <br />
          Get them serviced like it&apos;s 2027.
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8, ease }}
          viewport={{ once: true, margin: '-80px' }}
          className="mt-10 md:mt-14 flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center"
        >
          <Button asChild size="lg">
            <a href="#schedule">Schedule a call</a>
          </Button>
          <Button asChild size="lg" variant="ghost">
            <a href="#proof">See coverage</a>
          </Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 text-sm md:text-base text-light-gray/60"
        >
          Built with{' '}
          <span className="text-accent" aria-label="love">
            ❤︎
          </span>{' '}
          by ex-roboticists.
        </motion.p>
      </div>
    </section>
  );
}
