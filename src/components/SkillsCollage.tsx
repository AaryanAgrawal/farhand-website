'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const skills = [
  'Installation & startup',
  'Commissioning',
  'Break/fix',
  'Preventive maintenance',
  'IMACs (installs · moves · adds · changes)',
  'Retrofits & upgrades',
  'Robot relocations',
  'Offsite rebuilds',
  'End-of-arm tooling',
  'Vision system integration',
  'PLC programming',
  'HMI configuration',
  'Calibration & TCP setup',
  'Safety evaluations',
  'Parts management',
  'Operator training',
  'FANUC',
  'ABB',
  'Yaskawa',
  'KUKA',
  'Universal Robots',
  'Cobot deployment',
  'AMRs & AGVs',
  'Welding & fabrication',
  'Material handling',
  'Pick · pack · palletize',
  'Press brake tending',
];

const ease = [0.19, 1, 0.22, 1] as const;

export default function SkillsCollage() {
  return (
    <section className="bg-background py-10 md:py-16 lg:py-24">
      <div className="container text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          viewport={{ once: true }}
          className="text-xs md:text-sm tracking-[0.2em] uppercase text-light-gray/60 mb-4"
        >
          What our technicians handle
        </motion.p>

        {/* TODO: section headline — fill in copy */}
        <h4
          className="mb-8 md:mb-12"
          style={{ lineHeight: 1.3, fontWeight: 400 }}
        />

        <div className="max-w-[1100px] mx-auto flex flex-wrap justify-center gap-2 md:gap-3">
          {skills.map((skill, i) => {
            const isLarge = i % 4 === 0;
            return (
              <motion.span
                key={skill}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04, duration: 0.5, ease }}
                viewport={{ once: true, margin: '-30px' }}
                className={[
                  'inline-flex items-center rounded-full border bg-white/5 border-white/10 text-light-gray/90',
                  'transition-colors hover:border-accent/60 hover:text-foreground',
                  isLarge
                    ? 'px-5 py-2.5 text-base md:text-lg'
                    : 'px-4 py-2 text-sm md:text-base',
                ].join(' ')}
              >
                {skill}
              </motion.span>
            );
          })}
        </div>

        <p className="mt-8 md:mt-10 text-sm text-light-gray/60">
          …and 200+ more.{' '}
          <Link
            href="/connect"
            className="text-accent hover:underline underline-offset-4"
          >
            Need something specific? Talk to us →
          </Link>
        </p>
      </div>
    </section>
  );
}
