'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { HelpCircle, Wrench, Infinity as InfinityIcon } from 'lucide-react';

const ease = [0.19, 1, 0.22, 1] as const;

function useCountUp(target: number, start: boolean, duration = 1400) {
  const [value, setValue] = useState(0);
  const startTime = useRef<number | null>(null);

  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const tick = (t: number) => {
      if (startTime.current === null) startTime.current = t;
      const elapsed = t - startTime.current;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, start, duration]);

  return value;
}

const relayPoints = [
  { title: 'Learns', desc: 'your docs and architecture', icon: <HelpCircle size={20} /> },
  { title: 'Guides', desc: 'engineers during service', icon: <Wrench size={20} /> },
  { title: 'Improves', desc: 'your SOPs iteratively', icon: <InfinityIcon size={20} /> },
];

export default function Proof() {
  const scaleRef = useRef<HTMLDivElement>(null);
  const inView = useInView(scaleRef, { once: true, margin: '-100px' });
  const count = useCountUp(2100, inView);

  return (
    <section id="proof" className="bg-background py-12 md:py-20 lg:py-28">
      <div className="container max-w-[1100px]">
        {/* Panel 1 — Scale */}
        <div
          ref={scaleRef}
          className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-8 md:gap-12 items-center"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease }}
            className="text-center md:text-left"
          >
            <div
              className="text-accent font-light tracking-tight leading-none tabular-nums"
              style={{
                fontSize: 'clamp(2.5rem, 5.5vw, 4rem)',
                fontFeatureSettings: '"tnum"',
              }}
            >
              {count.toLocaleString('en-US')}+
            </div>
            <div className="mt-3 md:mt-4 text-light-gray text-sm md:text-base">
              robot service engineers
              <br />
              nationwide.
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1, delay: 0.2, ease }}
            className="relative w-full max-w-[560px] mx-auto md:mx-0"
            style={{ aspectRatio: '1024 / 722' }}
          >
            <Image
              src="/world-map.avif"
              alt="Farhand nationwide field-service coverage map — every US zip code"
              fill
              sizes="(max-width: 768px) 100vw, 560px"
              className="object-contain"
            />
          </motion.div>
        </div>

        {/* Panel 2 — Speed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease }}
          className="mt-16 md:mt-24 text-center"
        >
          <div
            className="text-accent font-light tracking-tight leading-none"
            style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}
          >
            &lt;48hr
          </div>
          <p className="mt-4 md:mt-6 text-lg md:text-xl text-light-gray/85 max-w-[640px] mx-auto leading-relaxed">
            average dispatch-to-site. Closest-hub dispatch. No regional waitlists.
          </p>
        </motion.div>

        {/* Panel 3 — System (Relay) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease }}
          className="mt-16 md:mt-24 px-5 md:px-10 lg:px-12 py-10 md:py-14 lg:py-16 border border-white/10 rounded-[30px]"
        >
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-2xl md:text-3xl lg:text-[34px] font-light m-0">
              Farhand <strong className="font-medium">Relay</strong>
              <span className="align-super text-base">™</span> — the AI guiding every visit.
            </h3>
            <p className="mt-3 md:mt-4 text-base md:text-lg text-light-gray/80 max-w-[680px] mx-auto">
              Reads your docs. Walks the tech through diagnostics. Learns from every debrief.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-[860px] mx-auto">
            {relayPoints.map((point, i) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.1, duration: 0.6, ease }}
                className="flex items-start gap-3"
              >
                <div className="w-10 h-10 rounded-full border border-accent flex items-center justify-center text-accent shrink-0">
                  {point.icon}
                </div>
                <div>
                  <p className="text-lg md:text-xl font-medium text-foreground m-0">
                    {point.title}
                  </p>
                  <p className="text-sm md:text-base text-light-gray/85 m-0">
                    {point.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
