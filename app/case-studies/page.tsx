'use client';

import Navigation from '../components/Navigation';
import AnimateOnScroll from '../components/AnimateOnScroll';

const caseStudies = [
  {
    id: 1,
    title: 'IDS Platform - Self-Serve Data Infrastructure',
    subtitle: 'Enabling 28+ Dataset Onboarding with 80% Team Adoption',
    challenge: 'Expedia teams struggled with fragmented data access patterns. Different teams maintained separate data pipelines, leading to inconsistencies, duplication of effort, and poor data discoverability across the organization.',
    solution: 'Spearheaded the development of the Integrated Data Stores (IDS) platform - a self-serve data infrastructure enabling teams to onboard datasets through unified REST APIs. Designed producer-driven workflows that empowered data owners to manage their own data without engineering overhead.',
    impact: [
      { metric: '28+', desc: 'Datasets onboarded to unified platform' },
      { metric: '80%', desc: 'Adoption across Lodging, Marketing & Trips' },
      { metric: '99.9%', desc: 'UI uptime achieved' },
      { metric: '0', desc: 'Migration incidents' }
    ],
    technical: [
      'Designed and implemented scalable REST APIs using Java & Spring Boot',
      'Built producer-driven onboarding workflows reducing time-to-onboarding by 60%',
      'Redesigned Data API SDK UI flows to eliminate deployment bottlenecks',
      'Implemented comprehensive testing & monitoring with DataDog',
      'Led cross-timezone collaboration with UI & consumer teams as SME'
    ],
    outcome: 'Created a single source of truth for critical business data, enabling Expedia teams to confidently build personalization and analytics on reliable, discoverable data. Resulted in a performance award for exceeding expectations.',
    tech: ['Java', 'Spring Boot', 'REST APIs', 'Microservices', 'GCP', 'BigQuery', 'DataDog']
  },
  {
    id: 2,
    title: 'Merlon - Fine-Grained Authorization System',
    subtitle: 'Zanzibar-Inspired Authorization Reducing Misconfigurations by 30%',
    challenge: 'Expedia needed secure, fine-grained access control across datasets. Existing authorization models couldn\'t enforce attribute-level access (e.g., masking sensitive fields like email within non-sensitive datasets), leading to potential security misconfigurations and compliance risks.',
    solution: 'Engineered Merlon - a Zanzibar-inspired relation-based authorization system. Implemented fine-grained access control at both dataset and attribute levels, with producer-driven policies where data owners define authorized clients and mark sensitive attributes. Token subject-based authorization prevents privilege leaks.',
    impact: [
      { metric: '30%', desc: 'Reduction in policy misconfiguration incidents' },
      { metric: '100+', desc: 'Teams with secure attribute-level access' },
      { metric: '40%', desc: 'Reduction in sensitive data exposure' },
      { metric: '0', desc: 'Privilege escalation incidents' }
    ],
    technical: [
      'Designed relation-based access control model inspired by Google Zanzibar',
      'Implemented token subject-based authorization for strict identity correctness',
      'Built dynamic access policy management with real-time revocation',
      'Created comprehensive test suite with 35+ test scenarios',
      'Documented system architecture & onboarding guides for cross-team adoption'
    ],
    outcome: 'Secured sensitive attribute access across 100+ team datasets. Eliminated authorization-related security incidents and reduced manual access management overhead by 50%. Model became organizational standard for data access control.',
    tech: ['Java', 'Spring Boot', 'Authorization Patterns', 'GCP', 'Vault']
  },
  {
    id: 3,
    title: 'UI Integration & Production Excellence',
    subtitle: 'End-to-End UI Ownership, Automated Testing & P1 Incident Resolution',
    challenge: 'The IDS platform lacked seamless UI integration — frontend teams faced deployment bottlenecks, manual UI testing consumed 2+ days per release, and a critical P1 production issue threatened consumer dataset availability with discrepancies across Kafka, landed tables, and Data API.',
    solution: 'Took end-to-end ownership over two quarters to merge nearly all IDS backend capabilities into the UI. Implemented Playwright-based automated UI tests for the Data API SDK. Redesigned backend APIs and UI flows to eliminate bottlenecks. Led P1 incident resolution by coordinating across replicator, NoSQL, and Elasticsearch teams — scaling infrastructure and restoring data with defined MTTD and MTTR benchmarks.',
    impact: [
      { metric: '2 days', desc: 'Manual UI testing time saved per release' },
      { metric: '85%', desc: 'Increase in successful UI feature deployments' },
      { metric: '99.9%', desc: 'UI uptime achieved post-redesign' },
      { metric: '12 hrs', desc: 'MTTR benchmark set for P1 incidents' }
    ],
    technical: [
      'Implemented Playwright-based automated UI tests for Data API SDK, replacing 2-day manual cycles',
      'Redesigned backend APIs and Data API SDK UI flows to simplify frontend integration',
      'Eliminated deployment-service bottleneck and strengthened search capabilities',
      'Led cross-timezone collaboration with UI and consumer teams to clarify IDS feature requirements',
      'Handled critical P1 by identifying Kafka/table/API discrepancies, scaling Elasticsearch shards & replicator tasks',
      'Defined MTTD (3–5 hours) and MTTR (12 hours) benchmarks, setting standard for future incident response'
    ],
    outcome: 'Achieved zero migration incidents and 99.9% UI uptime. Automated UI testing eliminated manual regression cycles. The P1 resolution set a clear incident management benchmark adopted by other teams. End-to-end UI ownership contributed to a performance award for exceeding expectations.',
    tech: ['Playwright', 'Spring Boot', 'REST APIs', 'Elasticsearch', 'Kafka', 'DataDog', 'Splunk']
  }
];

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <Navigation isHomePage={false} />

      <main className="max-w-5xl mx-auto px-6 pt-24 pb-16">
        {/* ──── Header ──── */}
        <section className="mb-20">
          <AnimateOnScroll>
            <div className="mb-12">
              <div className="section-label mb-4">Deep Dive</div>
              <h1 className="text-5xl md:text-6xl font-bold mb-8">Case Studies</h1>
              <p className="text-xl text-[var(--text-secondary)] max-w-3xl leading-relaxed">
                Detailed technical breakdowns of the major systems I've built at Expedia. Each case study covers the challenge, solution, technical implementation, and measurable impact.
              </p>
            </div>
          </AnimateOnScroll>
        </section>

        {/* ──── Case Studies ──── */}
        {caseStudies.map((study, idx) => (
          <AnimateOnScroll key={study.id} delay={idx * 100} className="mb-20">
            <div className="card p-8 md:p-12">
              {/* Title Section */}
              <div className="mb-8 pb-8 border-b border-[var(--border)]">
                <div className="text-sm font-mono text-[var(--accent)] mb-2">Case Study #{study.id}</div>
                <h2 className="text-3xl md:text-4xl font-bold mb-3">{study.title}</h2>
                <p className="text-lg text-[var(--accent)] font-semibold">{study.subtitle}</p>
              </div>

              <div className="space-y-12">
                {/* Challenge */}
                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <span className="text-2xl">🎯</span>
                    The Challenge
                  </h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed text-lg">
                    {study.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <span className="text-2xl">💡</span>
                    The Solution
                  </h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed text-lg mb-6">
                    {study.solution}
                  </p>
                </div>

                {/* Impact Metrics */}
                <div>
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <span className="text-2xl">📊</span>
                    Impact & Results
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {study.impact.map((item, i) => (
                      <div key={i} className="bg-[var(--bg-card)] p-6 rounded-lg border border-[var(--border)]">
                        <div className="text-3xl font-bold text-[var(--accent)] mb-2">{item.metric}</div>
                        <div className="text-[var(--text-secondary)]">{item.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Implementation */}
                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <span className="text-2xl">⚙️</span>
                    Technical Implementation
                  </h3>
                  <ul className="space-y-3">
                    {study.technical.map((item, i) => (
                      <li key={i} className="flex gap-3 text-[var(--text-secondary)] leading-relaxed">
                        <span className="text-[var(--accent)] font-bold min-w-fit">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Outcome */}
                <div className="bg-[var(--accent-dim)] border border-[var(--accent-border)] rounded-lg p-6">
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                    <span className="text-2xl">🏆</span>
                    Outcome & Impact
                  </h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed text-lg">
                    {study.outcome}
                  </p>
                </div>

                {/* Tech Stack */}
                <div>
                  <h3 className="text-lg font-bold mb-4">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {study.tech.map((tech) => (
                      <span key={tech} className="skill-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        ))}

        {/* ──── CTA Section ──── */}
        <section className="text-center pt-20">
          <AnimateOnScroll>
            <div className="card p-12">
              <h2 className="text-3xl font-bold mb-6">Interested in working together?</h2>
              <p className="text-[var(--text-secondary)] text-lg mb-8 max-w-2xl mx-auto">
                I'm always excited to discuss challenging technical problems, system design, and building products that scale. Let's connect!
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <a
                  href="mailto:dakshatalekar123@gmail.com"
                  className="px-8 py-4 bg-[var(--accent)] text-black font-semibold rounded-lg hover:bg-emerald-400 transition-all inline-flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Get in Touch
                </a>
                <a
                  href="/"
                  className="px-8 py-4 border border-[var(--border-hover)] text-[var(--text-primary)] font-semibold rounded-lg hover:bg-[var(--bg-card)] transition-all inline-flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Back to Home
                </a>
              </div>
            </div>
          </AnimateOnScroll>
        </section>
      </main>

      {/* ──── Footer ──── */}
      <footer className="py-12 px-6 bg-[var(--bg-secondary)] border-t border-[var(--border)] mt-20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[var(--text-muted)] mb-4">
            © {new Date().getFullYear()} Daksha Talekar. All rights reserved.
          </p>
          <div className="flex justify-center gap-6">
            <a href="https://linkedin.com/in/daksha-talekar-a0a4b7211" target="_blank" rel="noopener noreferrer" className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors">
              LinkedIn
            </a>
            <a href="https://github.com/coding-ship-it" target="_blank" rel="noopener noreferrer" className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors">
              GitHub
            </a>
            <a href="https://peerlist.io/dakshata123" target="_blank" rel="noopener noreferrer" className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors">
              Peerlist
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
