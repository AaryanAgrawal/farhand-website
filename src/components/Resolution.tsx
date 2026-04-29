'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

const ease = [0.19, 1, 0.22, 1] as const;

const robotTypes = ['AMRs', 'AGVs', 'Cobots', 'Robotic Arms', 'ASRS'];

const tiles = [
  {
    title: 'The technicians',
    body: 'Vetted, insured, in every US zip code.',
  },
  {
    title: 'The AI (Relay)',
    body: 'Learns your docs and SOPs. Guides each visit. Improves with every job.',
  },
  {
    title: 'The economics',
    body: 'Per job. No retainers. No minimums.',
  },
];

export default function Resolution() {
  return (
    <section className="bg-background py-12 md:py-20 lg:py-28">
      <div className="container max-w-[1100px] text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease }}
          viewport={{ once: true, margin: '-80px' }}
          className="text-2xl md:text-3xl lg:text-[34px] font-light leading-snug max-w-[860px] mx-auto"
        >
          Farhand is your{' '}
          <strong className="font-medium text-foreground">
            white-labelled service partner
          </strong>
          . On-site field service engineers, nationwide. Remote technical support. So you scale revenue and focus on R&amp;D.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8, ease }}
          viewport={{ once: true, margin: '-80px' }}
          className="mt-10 md:mt-14 flex flex-wrap justify-center items-center gap-x-3 md:gap-x-5 gap-y-2 text-xl md:text-2xl lg:text-3xl text-accent font-light"
        >
          {robotTypes.map((type, i) => (
            <React.Fragment key={type}>
              <span>{type}</span>
              {i < robotTypes.length - 1 && (
                <span className="text-accent/40">·</span>
              )}
            </React.Fragment>
          ))}
        </motion.div>

        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 max-w-[1000px] mx-auto">
          {tiles.map((tile, i) => (
            <motion.div
              key={tile.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 + i * 0.12, duration: 0.8, ease }}
              viewport={{ once: true, margin: '-50px' }}
            >
              <Card className="text-left h-full flex flex-col gap-3">
                <h3 className="text-xl md:text-2xl font-medium text-foreground m-0">
                  {tile.title}
                </h3>
                <p className="text-base md:text-lg text-light-gray/85 m-0 leading-relaxed">
                  {tile.body}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-10 md:mt-12 text-sm md:text-base text-light-gray/60"
        >
          Servicing every major robot brand and most industrial machinery.{' '}
          <Link
            href="/services/industrial-robots"
            className="text-accent hover:underline underline-offset-4"
          >
            See the full taxonomy →
          </Link>
        </motion.p>
      </div>
    </section>
  );
}
