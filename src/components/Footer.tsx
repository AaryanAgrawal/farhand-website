'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Cal, { getCalApi } from "@calcom/embed-react";
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

export default function Footer() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", { 
        theme: "dark", 
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        layout: "month_view"
      });
    })();
  }, []);

  return (
    <footer id="schedule" className="section-padding" style={{ paddingBottom: '3rem', background: '#000' }}>
      <div className="container">
        
        {/* Main CTA block */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          style={{ textAlign: 'center', marginBottom: 'clamp(4rem, 10vw, 6rem)' }}
        >
          <h3 style={{ fontSize: 'clamp(1.5rem, 5vw, 32px)', marginBottom: '1.5rem', lineHeight: 1.4, fontWeight: 300 }}>
            You don't need a field support team. <br/>
            You need field service <span className="text-accent" style={{ fontWeight: 600 }}>done.</span>
          </h3>
          <p style={{ color: 'var(--light-gray)', marginBottom: 'clamp(3rem, 10vw, 5rem)', fontSize: 'clamp(16px, 2vw, 18px)' }}>
            Book a call with Aaryan to discuss your deployment needs.
          </p>

          {/* Cal.com Embed */}
          <div style={{ 
            maxWidth: '1000px', 
            margin: '0 auto', 
            background: 'rgba(255,255,255,0.01)', 
            borderRadius: '24px', 
            border: '1px solid var(--border-color)',
            overflow: 'hidden',
            minHeight: 'clamp(450px, 80vw, 600px)'
          }}>
            <Cal 
              calLink="aaryan-agrawal/30min" 
              style={{ width: "100%", height: "100%", minHeight: "clamp(450px, 80vw, 600px)" }}
              config={{ layout: 'month_view', theme: 'dark' }}
            />
          </div>
        </motion.div>

        {/* Contact info and Socials */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 'clamp(2rem, 10vw, 5rem)', flexWrap: 'wrap', marginBottom: 'clamp(5rem, 15vw, 8rem)', textAlign: 'center' }}>
           <div>
            <p style={{ fontSize: '11px', fontWeight: 600, color: '#555', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>
              Email
            </p>
            <p style={{ fontSize: 'clamp(18px, 2.5vw, 20px)', color: 'var(--foreground)', margin: 0, fontWeight: 500 }}>
              aaryan@farhand.live
            </p>
          </div>
          <div>
            <p style={{ fontSize: '11px', fontWeight: 600, color: '#555', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>
              Direct
            </p>
            <p style={{ fontSize: 'clamp(18px, 2.5vw, 20px)', color: 'var(--foreground)', margin: 0, fontWeight: 500 }}>
              (857) 498-9778
            </p>
          </div>
          <div>
            <p style={{ fontSize: '11px', fontWeight: 600, color: '#555', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>
              Social
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
              <motion.a whileHover={{ color: 'var(--accent-green)' }} href="#" style={{ color: 'var(--light-gray)' }}><FaLinkedin size={20}/></motion.a>
              <motion.a whileHover={{ color: 'var(--accent-green)' }} href="#" style={{ color: 'var(--light-gray)' }}><FaTwitter size={20}/></motion.a>
              <motion.a whileHover={{ color: 'var(--accent-green)' }} href="#" style={{ color: 'var(--light-gray)' }}><FaGithub size={20}/></motion.a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'flex-end',
          borderTop: '1px solid var(--border-color)',
          paddingTop: '3rem',
          flexWrap: 'wrap',
          gap: '2rem'
        }}>
          <div style={{ textAlign: 'left' }}>
            <img 
              src="/logo-w-type-dark.png" 
              alt="Farhand Logo" 
              style={{ height: '22px', filter: 'invert(1)', opacity: 0.8, marginBottom: '1rem' }} 
            />
            <p style={{ fontSize: '13px', color: 'var(--light-gray)', opacity: 0.5, maxWidth: '250px', lineHeight: 1.5, marginBottom: '1rem' }}>
              The infrastructure for the next generation of industrial automation.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <Link href="/terms" style={{ fontSize: '13px', color: 'var(--light-gray)', opacity: 0.5, textDecoration: 'underline' }}>Terms</Link>
              <Link href="/privacy" style={{ fontSize: '13px', color: 'var(--light-gray)', opacity: 0.5, textDecoration: 'underline' }}>Privacy</Link>
            </div>
          </div>

          <div style={{ textAlign: 'right' }}>
            <p style={{ fontSize: 'clamp(16px, 2vw, 18px)', color: 'var(--foreground)', fontWeight: 400, marginBottom: '0.5rem' }}>
              Designed by SF-based roboticists
            </p>
            <p style={{ fontSize: '13px', color: 'var(--light-gray)', opacity: 0.5 }}>
              © 2026 Farhand Inc. All rights reserved.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
