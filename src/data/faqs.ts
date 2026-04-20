/**
 * Shared FAQ data for the Farhand website.
 * Used on homepage, blog index, and /faq page.
 *
 * Only the most conversion-relevant questions — the ones buyers actually ask.
 */

export interface FAQItem {
  q: string;
  a: string;
}

export const coreFaqs: FAQItem[] = [
  {
    q: 'How does AI-guided field service work?',
    a: 'Every Field Service Engineer performs like your best senior expert. Knows your machine. Knows your process. Knows the history. Calls close faster. First-time-fix rates up.',
  },
  {
    q: 'What types of machines do you service?',
    a: 'Robots. Industrial machinery. Medical equipment. Precision instruments. Aviation ground gear. Anything with service docs.',
  },
  {
    q: 'What areas do you cover?',
    a: 'Every US zip code. Same AI platform coast to coast. Same service quality everywhere.',
  },
  {
    q: 'How fast can you respond to an issue?',
    a: 'Remote triage starts immediately. 1 in 3 issues resolved without anyone onsite. Same-day dispatch when needed.',
  },
  {
    q: 'How is this different from a staffing agency or OEM service contract?',
    a: 'Staffing sends bodies. OEMs are slow and expensive. We send Field Service Engineers who arrive knowing your machine. No long-term contracts.',
  },
  {
    q: 'Is my documentation secure?',
    a: 'Yes. Private and scoped to your equipment. Never shared. Full audit trails on every call.',
  },
  {
    q: 'How do I get started and what does it cost?',
    a: 'Book a call. Share your docs. Relay set up in days. Pricing by volume — typically cheaper than internal team or OEM contracts.',
  },
];
