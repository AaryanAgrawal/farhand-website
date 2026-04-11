'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Cal, { getCalApi } from "@calcom/embed-react";
import { FaLinkedin } from 'react-icons/fa';

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
    <footer id="schedule" style={{ background: '#000', paddingBottom: '2rem' }}>
      <div className="container">

        {/* CTA Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          style={{ textAlign: 'center', padding: 'clamp(3rem, 8vw, 5rem) 0 clamp(2rem, 5vw, 3rem)' }}
        >
          <h3 style={{ fontSize: 'clamp(1.5rem, 4vw, 32px)', marginBottom: '0.25rem', lineHeight: 1.5, fontWeight: 400 }}>
            You don&apos;t need a field support team.
          </h3>
          <h3 style={{ fontSize: 'clamp(1.5rem, 4vw, 32px)', lineHeight: 1.5, fontWeight: 400 }}>
            You need field service <em className="text-accent" style={{ fontStyle: 'italic' }}>done</em>.
          </h3>
        </motion.div>

        {/* Contact + Email Form Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            gap: 'clamp(3rem, 8vw, 6rem)',
            flexWrap: 'wrap',
            maxWidth: '900px',
            margin: '0 auto clamp(2rem, 5vw, 3rem)',
          }}
        >
          {/* Contact Info */}
          <div style={{ textAlign: 'center', minWidth: '200px' }}>
            <p style={{ fontSize: 'clamp(18px, 2.5vw, 20px)', color: 'var(--foreground)', marginBottom: '0.5rem', fontWeight: 400 }}>
              aaryan@farhand.live
            </p>
            <p style={{ fontSize: 'clamp(18px, 2.5vw, 20px)', color: 'var(--foreground)', fontWeight: 400, margin: 0 }}>
              (857) 498-9778
            </p>
          </div>

          {/* Email Form */}
          <div style={{ flex: '1 1 320px', maxWidth: '520px' }}>
            <p style={{ fontSize: '15px', color: 'var(--light-gray)', opacity: 0.7, marginBottom: '0.75rem' }}>
              Email
            </p>
            <div style={{
              background: 'rgba(187, 187, 187, 0.15)',
              borderRadius: '10px',
              padding: '14px',
              marginBottom: '12px',
            }}>
              <input
                type="email"
                placeholder="jules@example.com"
                style={{
                  width: '100%',
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  color: '#999',
                  fontSize: '16px',
                  fontFamily: 'inherit',
                  minHeight: '20px',
                }}
              />
            </div>
            <button
              style={{
                width: '100%',
                background: '#444',
                color: '#fff',
                border: 'none',
                borderRadius: '10px',
                padding: '14px',
                fontSize: '15px',
                fontWeight: 600,
                cursor: 'pointer',
                minHeight: '48px',
              }}
            >
              Schedule a call
            </button>
          </div>
        </motion.div>

        {/* Cal.com Embed */}
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto clamp(3rem, 8vw, 5rem)',
          background: 'rgba(255,255,255,0.01)',
          borderRadius: '24px',
          border: '1px solid var(--border-color)',
          overflow: 'hidden',
          minHeight: 'clamp(450px, 80vw, 600px)',
        }}>
          <Cal
            calLink="aaryan-agrawal/30min"
            style={{ width: "100%", height: "100%", minHeight: "clamp(450px, 80vw, 600px)" }}
            config={{ layout: 'month_view', theme: 'dark' }}
          />
        </div>

        {/* Footer Content */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: '3rem',
          marginBottom: '2rem',
        }}>
          <div style={{ textAlign: 'right', marginLeft: 'auto' }}>
            <p style={{ fontSize: '15px', color: 'var(--light-gray)', opacity: 0.6, lineHeight: 1.6 }}>
              Designed by SF-based roboticists<br />
              For robots out in the field
            </p>
          </div>
        </div>

        {/* Bottom Section - Logo + Map */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
          gap: '3rem',
          paddingBottom: '2rem',
        }}>
          {/* Left Column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <img
                src="/logo-w-type-dark.png"
                alt="Farhand Logo"
                style={{ height: '24px', filter: 'invert(1)', opacity: 0.9 }}
              />
            </div>
            <p style={{ fontSize: '14px', color: 'var(--light-gray)', opacity: 0.6, marginBottom: '1rem' }}>
              Your field support partner
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
              <motion.a
                whileHover={{ opacity: 0.9 }}
                href="https://www.linkedin.com/company/farhand-robotics/home"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--light-gray)', opacity: 0.8, padding: '10px', margin: '-10px' }}
              >
                <FaLinkedin size={20} />
              </motion.a>
            </div>
          </div>

          {/* Right Column - US Map */}
          <div style={{ maxWidth: '450px', flex: '1 1 300px' }}>
            <img
              src="/us-map.png"
              alt="US Coverage Map"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid var(--border-color)',
          paddingTop: '1.5rem',
        }}>
          <Link href="/terms" style={{ fontSize: '14px', color: 'var(--light-gray)', opacity: 0.6, padding: '8px 0', display: 'inline-block' }}>
            Terms &amp; Privacy
          </Link>
        </div>

      </div>
    </footer>
  );
}
