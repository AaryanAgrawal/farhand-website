'use client';

import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
  return (
    <main style={{ background: '#000', minHeight: '100vh', color: '#fff' }}>
      <Navigation />
      <div className="section-padding">
        <div className="container" style={{ maxWidth: '800px', paddingTop: '4rem' }}>
          <h1 style={{ marginBottom: '2rem' }}>Privacy Policy</h1>
          <p style={{ marginBottom: '1.5rem', color: 'var(--light-gray)' }}>Last Updated: April 2026</p>
          
          <div style={{ lineHeight: 1.8, color: 'var(--light-gray)' }}>
            <h3 style={{ color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>1. Data Collection</h3>
            <p>We collect personal information when you book a call, such as your name, email, and phone number, to provide our field service support.</p>
            
            <h3 style={{ color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>2. Data Usage</h3>
            <p>Your data is used to coordinate technician deployments and improve the Farhand Relay™ AI guidance system.</p>
            
            <h3 style={{ color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>3. Data Sharing</h3>
            <p>Farhand does not sell your personal information. We may share data with service providers to facilitate installations and repairs.</p>
            
            <h3 style={{ color: '#fff', marginTop: '2rem', marginBottom: '1rem' }}>4. Security</h3>
            <p>We use industry-standard measures to protect your information, ensuring that your machinery data remains confidential.</p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
