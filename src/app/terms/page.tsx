'use client';

import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function TermsPage() {
  return (
    <main style={{ background: '#000', minHeight: '100vh', color: '#fff' }}>
      <Navigation />
      <div className="section-padding">
        <div className="container" style={{ maxWidth: '800px', paddingTop: '4rem' }}>
          <h1 style={{ marginBottom: '2rem' }}>Terms & Conditions</h1>
          <p style={{ marginBottom: '1.5rem', color: 'var(--light-gray)' }}>Last Updated: April 2026</p>
          
          <div style={{ lineHeight: 1.8, color: 'var(--light-gray)' }}>
            <h3 style={{ color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>1. Acceptance of Terms</h3>
            <p>By accessing farhand.live, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services.</p>
            
            <h3 style={{ color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>2. Description of Service</h3>
            <p>Farhand provides AI-guided technician services for robots and machinery. Our platform, Farhand Relay™, facilitates on-site installations and repairs.</p>
            
            <h3 style={{ color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>3. Use of Content</h3>
            <p>All content on this website is the property of Farhand Inc. and is protected by copyright laws. Unauthorized use is prohibited.</p>
            
            <h3 style={{ color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>4. Limitation of Liability</h3>
            <p>Farhand Inc. shall not be liable for any indirect, incidental, or consequential damages resulting from the use or inability to use our services.</p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
