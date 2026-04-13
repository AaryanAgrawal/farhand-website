'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, Wrench, Infinity } from 'lucide-react';
import { Card } from '@/components/ui/card';

const steps = [
  { title: "Learns", desc: "your documentation", icon: <HelpCircle size={20} /> },
  { title: "Guides", desc: "technicians during repairs", icon: <Wrench size={20} /> },
  { title: "Improves", desc: "by text and voice debriefs", icon: <Infinity size={20} /> },
];

export default function Relay() {
  return (
    <section id="relay" className="bg-background py-[clamp(3rem,8vw,6rem)]">
      <div className="container text-center">

        {/* Solution Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="py-[clamp(3rem,8vw,5rem)] px-[clamp(1.5rem,5vw,3rem)] border border-white/10 rounded-[30px] max-w-[900px] mx-auto mb-[clamp(3rem,8vw,5rem)]"
        >
          <p className="text-base md:text-lg text-light-gray/90 mb-6 font-normal">
            There&apos;s a better model
          </p>
          <h3 className="max-w-[750px] mx-auto mb-6 font-light leading-[1.45]">
            <strong>On-demand technicians guided by AI to service your machines like your own guys</strong>
          </h3>
          <p className="text-base md:text-lg text-light-gray/80">
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
          <h3 className="text-[clamp(28px,5vw,34px)] mb-2 font-light">
            Farhand <strong>Relay</strong>&#8482;
          </h3>
          <p className="text-base md:text-lg font-normal text-light-gray/80 mb-[clamp(2rem,6vw,3rem)]">
            <strong>Our AI platform that becomes your senior technician.</strong>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 max-w-[1000px] mx-auto">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 1, ease: [0.19, 1, 0.22, 1] }}
                viewport={{ once: true }}
              >
                <Card className="flex flex-col justify-start min-h-[160px] text-left">
                  <div className="w-10 h-10 rounded-full border border-accent flex items-center justify-center text-accent mb-6">
                    {step.icon}
                  </div>
                  <p className="text-xl md:text-[22px] font-medium text-foreground mb-2">
                    {step.title}
                  </p>
                  <p className="text-base md:text-lg text-light-gray/90 m-0 leading-relaxed">
                    {step.desc}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
