import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Relay from '@/components/Relay';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

const homepageFaqs = [
  {
    q: 'What does Farhand do?',
    a: 'We provide AI-guided field service technicians for robots, industrial machinery, medical equipment, and other complex machines. Our AI platform Relay™ learns your documentation and guides technicians during repairs so they perform like your best senior tech.',
  },
  {
    q: 'How does AI-guided service work?',
    a: 'You upload your documentation — manuals, SOPs, wiring diagrams, error codes, firmware changelogs. Our Relay platform loads the full manual into context. When a technician arrives, they have AI-powered step-by-step guidance specific to your machine, its history, and its current state.',
  },
  {
    q: 'What areas do you cover?',
    a: 'Every zip code in the United States. We have on-demand technicians nationwide, guided by our AI platform so they perform consistently across any location.',
  },
  {
    q: 'How fast can you respond to an issue?',
    a: 'Remote triage begins immediately. On-site technicians can be dispatched same-day for critical issues. Many issues are resolved remotely first — 1 in 3 service queries can be solved without sending anyone.',
  },
  {
    q: 'How is this different from an OEM service contract?',
    a: 'OEM contracts are slow and expensive. We provide the same technical depth — your full documentation loaded into AI — with faster response times and on-demand flexibility. No long-term contracts required.',
  },
  {
    q: 'How do I get started?',
    a: 'Schedule a call with our team. Share your equipment documentation and we set up your Relay instance. The process takes days, not months.',
  },
];

export default function Home() {
  return (
    <main style={{ background: '#000', minHeight: '100vh' }}>
      <Navigation />
      <Hero />
      <div id="problem">
        <Problem />
      </div>
      <Relay />
      <FAQSection
        faqs={homepageFaqs}
        subtitle="Everything you need to know about AI-guided field service."
      />
      <Footer />
    </main>
  );
}
