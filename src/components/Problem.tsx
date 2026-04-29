'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

const outcomes = [
  {
    value: '<48hr',
    heading: 'Avg dispatch-to-site',
    body: 'Closest-hub dispatch in every US zip code. No regional offices, no waitlists.',
  },
  {
    value: '41,000+',
    heading: 'US zips, day one',
    body: 'AI-guided FSEs deploy the day you call — anywhere your customer is.',
  },
  {
    value: '0',
    heading: 'Retainers, minimums, or contracts',
    body: 'Pay per job. We earn the next visit on the last visit.',
  },
];

export default function Problem() {
  return (
    <section className="bg-background py-10 md:py-16 lg:py-24">
      <div className="container text-center">
        {/* TODO: section headline — fill in copy */}
        <h4
          className="mb-8 md:mb-20 lg:mb-24"
          style={{ lineHeight: 1.3, fontWeight: 400 }}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 max-w-[1100px] mx-auto">
          {outcomes.map((o, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
              viewport={{ once: true, margin: '-50px' }}
            >
              <Card className="text-left border border-white/10 hover:border-white/20 min-h-[220px] flex flex-col gap-4">
                <p className="text-5xl md:text-6xl font-light text-accent leading-none m-0">
                  {o.value}
                </p>
                <h3 className="text-xl md:text-2xl font-medium text-foreground m-0 leading-snug">
                  {o.heading}
                </h3>
                <p className="text-sm md:text-base text-light-gray/80 m-0 leading-relaxed">
                  {o.body}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
