import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FAQSection from '@/components/FAQSection';
import NewsletterSignup from '@/components/NewsletterSignup';
import Link from 'next/link';
import { coreFaqs } from '@/data/faqs';

const posts = [
  {
    slug: 'field-service-roi-calculator',
    title: 'How to Calculate Field Service ROI in 2026',
    excerpt: 'A practical framework: truck roll costs, first-time fix multipliers, downtime savings, and the AI compounding effect. Build a defensible ROI model.',
    date: '2026-04-12',
    category: 'Insights',
  },
  {
    slug: 'fanuc-robot-maintenance-checklist',
    title: 'FANUC Robot Maintenance: A Complete Service Checklist',
    excerpt: 'Daily, monthly, and annual service tasks for FANUC robots. Battery replacement, grease intervals, encoder calibration, and the failures you avoid.',
    date: '2026-04-12',
    category: 'Technical',
  },
  {
    slug: 'industrial-robot-downtime-cost',
    title: 'The True Cost of Downtime for Industrial Robots',
    excerpt: 'Unplanned downtime costs $1.4T globally. Per-hour losses hit $2.3M in automotive. The iceberg beneath truck rolls and why MTTR is the only lever.',
    date: '2026-04-12',
    category: 'Insights',
  },
  {
    slug: 'predictive-vs-preventive-maintenance',
    title: 'Predictive Maintenance vs Preventive Maintenance: Which Wins?',
    excerpt: 'The data, the tradeoffs, and the hybrid that actually works. Why neither approach alone closes the first-time fix gap — and what does.',
    date: '2026-04-12',
    category: 'Technology',
  },
  {
    slug: 'remote-diagnostics-field-service',
    title: 'Remote Diagnostics: The $14B Opportunity in Field Service',
    excerpt: '1 in 3 tickets can be resolved remotely. The global market is projected at $14B by 2030. Three-tier triage and who captures the upside.',
    date: '2026-04-12',
    category: 'Industry',
  },
  {
    slug: 'oem-field-service-scaling',
    title: "Why OEMs Can't Scale Internal Service Teams",
    excerpt: 'Hiring bottlenecks, geographic sprawl, knowledge loss, SLA traps. Why the W-2-only service org ends, and what replaces it.',
    date: '2026-04-12',
    category: 'Industry',
  },
  {
    slug: 'field-service-knowledge-management',
    title: 'Knowledge Management for Field Service Teams',
    excerpt: 'Why SharePoint and Confluence fail service techs at the point of repair. How AI-guided workflows finally fix the retrieval problem.',
    date: '2026-04-12',
    category: 'Insights',
  },
  {
    slug: 'reduce-truck-rolls-ai',
    title: 'How AI Reduces Truck Rolls by 40%',
    excerpt: 'Dispatcher calculus flips when AI gives remote triage full context. 30-40% truck roll reduction is the new benchmark. Here is the math.',
    date: '2026-04-12',
    category: 'Technology',
  },
  {
    slug: 'field-service-trends-2026',
    title: 'The Future of Field Service: 2026 and Beyond',
    excerpt: 'Seven trends reshaping the category: AI-guided workflows, remote-first triage, outcome-based contracts, the skills cliff, and more.',
    date: '2026-04-12',
    category: 'Industry',
  },
  {
    slug: 'cobot-maintenance-guide',
    title: 'Cobot Maintenance Guide: Collaborative Robot Service Best Practices',
    excerpt: 'Daily checks, joint intervals, safety validation, and the failure modes unique to UR, FANUC CRX, Doosan, and Techman cobots.',
    date: '2026-04-12',
    category: 'Technical',
  },
  {
    slug: 'ai-guided-field-service-robots',
    title: 'AI-Guided Field Service for Robots: Why the Old Model is Broken',
    excerpt: '1 in 7 onsite service visits is completely unnecessary. A failed first visit adds 2 more visits and 14 extra days. AI changes everything.',
    date: '2026-04-10',
    category: 'Industry',
  },
  {
    slug: 'field-service-skills-gap',
    title: 'The Field Service Skills Gap Is Costing You Millions',
    excerpt: 'Bottom-performing techs cost 97% more than top performers. The skills gap between your best and worst techs is the biggest hidden cost in field service.',
    date: '2026-04-09',
    category: 'Insights',
  },
  {
    slug: 'remote-resolution-field-service',
    title: '1 in 3 Service Issues Can Be Resolved Without Sending Anyone',
    excerpt: '1 in 5 cases could be resolved remotely but still get a truck roll. AI + phone = fixed. Here\'s how remote resolution works.',
    date: '2026-04-08',
    category: 'Technology',
  },
  {
    slug: 'knowledge-preservation-field-service',
    title: 'Your Senior Tech Is Retiring. Is Their Knowledge Retiring Too?',
    excerpt: 'Capture what your senior techs know before they leave. Make it searchable. New tech performs like a 10-year veteran on day one.',
    date: '2026-04-07',
    category: 'Insights',
  },
  {
    slug: 'first-time-fix-rate-ai',
    title: 'How AI Pushes First-Time Fix Rates from 53% to 86%',
    excerpt: 'Top teams achieve 86% first-time fix rate. Bottom teams: 53%. The difference is knowledge access. AI closes the gap.',
    date: '2026-04-06',
    category: 'Technology',
  },
];

export const metadata = {
  title: 'Blog',
  description: 'Insights on AI-guided field service, robot maintenance, and the future of industrial service operations.',
};

export default function BlogPage() {
  return (
    <main className="bg-background min-h-screen">
      <Navigation />

      <section className="pt-32 md:pt-40 lg:pt-48 pb-12 md:pb-16 lg:pb-20">
        <div className="container text-center">
          <h1 className="mb-4">Blog</h1>
          <h2 className="max-w-[600px] mx-auto">
            Insights on AI-guided field service and the future of industrial operations.
          </h2>
        </div>
      </section>

      <section className="pb-16 md:pb-24 lg:pb-32">
        <div className="container max-w-[800px]">
          {posts.map((post, i) => (
            <Link
              key={i}
              href={`/blog/${post.slug}`}
              className="block py-8 border-b border-white/10 no-underline transition-opacity duration-200 hover:opacity-80"
            >
              <div className="flex justify-between items-center mb-3 flex-wrap gap-2">
                <span className="text-xs text-accent font-medium uppercase tracking-wider">
                  {post.category}
                </span>
                <span className="text-xs text-light-gray/50">
                  {post.date}
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-medium mb-2 leading-[1.3]">
                {post.title}
              </h3>
              <p className="text-base text-light-gray/80 m-0 leading-relaxed">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <NewsletterSignup />

      <FAQSection faqs={coreFaqs} subtitle="Everything you need to know about AI-guided field service." />

      <Footer />
    </main>
  );
}
