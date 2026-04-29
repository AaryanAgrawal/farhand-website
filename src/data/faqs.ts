/**
 * Shared FAQ data for the Farhand website.
 * Used on homepage, blog index, and /faq page (which has its own
 * extended 12-question list).
 *
 * Keep this array tight — only the most pre-booking-relevant
 * questions. Coverage / machine types / "how do I get started" are
 * answered by the homepage flow (Resolution, Proof, Final CTA), so
 * they don't earn a spot in the FAQ.
 */

export interface FAQItem {
  q: string;
  a: string;
}

export const coreFaqs: FAQItem[] = [
  {
    q: 'How does AI-guided field service work?',
    a: 'Every Field Service Engineer performs like your senior engineer. Knows your machine. Knows your process. Knows the history. Calls close faster. First-time-fix rates up.',
  },
  {
    q: 'How fast can you respond to an issue?',
    a: 'Remote triage starts immediately. 1 in 3 issues resolved without anyone onsite. Same-day dispatch when needed.',
  },
  {
    q: 'How is this different from a staffing agency or OEM service contract?',
    a: 'Staffing sends bodies that you have to manage. OEMs are slow and expensive. We send Field Service Engineers who arrive knowing your machine. No long-term contracts.',
  },
  {
    q: 'How do you price?',
    a: 'You only pay for usage. Pay for our engineers\u2019 time on your client sites. Insurance and travel comes with, on us.',
  },
  {
    q: 'Is my documentation secure?',
    a: 'Yes. Private and scoped to your equipment. Never shared. Full audit trails on every call.',
  },
];
