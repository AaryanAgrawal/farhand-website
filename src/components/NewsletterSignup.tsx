'use client';

import { useState } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState<string>('');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus('success');
      setMessage('Subscribed. Check your inbox.');
      setEmail('');
    } catch {
      setStatus('error');
      setMessage('Something went wrong. Try again.');
    }
  }

  return (
    <section
      style={{
        padding: 'clamp(3rem, 8vw, 5rem) 0',
        borderTop: '1px solid var(--border-color)',
        borderBottom: '1px solid var(--border-color)',
      }}
    >
      <div
        className="container"
        style={{ maxWidth: '640px', textAlign: 'center' }}
      >
        <h2 style={{ marginBottom: '1rem', fontSize: 'clamp(24px, 4vw, 32px)', fontWeight: 400 }}>
          Field service intelligence, monthly.
        </h2>
        <p
          style={{
            color: 'var(--light-gray)',
            opacity: 0.8,
            marginBottom: '2rem',
            lineHeight: 1.6,
          }}
        >
          New benchmarks, case studies, and AI-guided service patterns. No spam, unsubscribe anytime.
        </p>
        <form
          onSubmit={onSubmit}
          style={{
            display: 'flex',
            gap: '0.5rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <input
            type="email"
            required
            placeholder="you@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === 'loading'}
            style={{
              flex: '1 1 260px',
              padding: '0.85rem 1rem',
              fontSize: '16px',
              background: '#111',
              border: '1px solid var(--border-color)',
              borderRadius: '4px',
              color: 'var(--foreground)',
              outline: 'none',
            }}
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            style={{
              padding: '0.85rem 1.5rem',
              fontSize: '16px',
              background: 'var(--accent-green)',
              border: 'none',
              borderRadius: '4px',
              color: '#000',
              cursor: status === 'loading' ? 'wait' : 'pointer',
              fontWeight: 500,
            }}
          >
            {status === 'loading' ? 'Subscribing…' : 'Subscribe'}
          </button>
        </form>
        {message && (
          <p
            style={{
              marginTop: '1rem',
              fontSize: '14px',
              color: status === 'error' ? '#ff6b6b' : 'var(--accent-green)',
            }}
          >
            {message}
          </p>
        )}
      </div>
    </section>
  );
}
