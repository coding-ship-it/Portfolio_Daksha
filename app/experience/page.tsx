import Navigation from '../components/Navigation';
import AnimateOnScroll from '../components/AnimateOnScroll';

const caseStudies = [
  {
    id: 'api-migration',
    category: 'System Design & Migration',
    title: 'Data API SDK & UI Re-architecture',
    subtitle: 'Eliminating bottlenecks and single points of failure in Expedia\'s data platform',
    duration: '6 months',
    role: 'Technical Lead',
    problem: [
      'The UI architecture relied on a deployment service intermediary causing bottlenecks, single points of failure, and increased maintenance complexity.',
      'Backend systems lacked comprehensive support for different required field base searching limiting security and compliance capabilities.',
      'Search endpoints did not support necessary metadata queries, including team-based filtering and multi-status deployment filtering, impairing data discoverability.',
      'Insufficient testing and documentation increased risk and complexity during migration and onboarding.',
    ],
    approach: [
      'Led a strategic migration plan with thorough API mapping, dependency analysis, phased rollout, and rollback procedures to ensure seamless transition without downtime.',
      'Enhanced backend by implementing full security group metadata support with real-time validation.',
      'Integrated team_dl into search functionality, enabling advanced metadata search capabilities with multi-tenant and multi-status filtering.',
      'Developed and maintained an automated UI testing framework across environments, ensuring functionality, performance, and reliability.',
      'Produced comprehensive backstage documentation for migration, onboarding, and ongoing operational support.',
    ],
    impact: [
      { metric: '40%', label: 'Faster API Response', desc: 'Eliminated deployment service bottlenecks' },
      { metric: '99.9%', label: 'UI Uptime', desc: 'Zero migration incidents' },
      { metric: '90%', label: 'SPOF Eliminated', desc: 'Removed deployment service single points of failure' },
      { metric: '75%', label: 'Fewer Support Tickets', desc: 'Enhanced operational efficiency' },
    ],
    practice: [
      'Delivered reusable automated UI testing suites and validation tools integrated into CI/CD pipelines.',
      'Authored reusable API migration and search functionality documentation and code modules, accelerating onboarding and cross-team knowledge sharing.',
      'These practice developments have become foundational to team productivity, product quality, and operational scalability.',
    ],
    tags: ['Java', 'Spring Boot', 'REST APIs', 'System Design', 'CI/CD', 'Testing'],
  },
  {
    id: 'data-sync',
    category: 'Data Engineering & CI/CD',
    title: 'Real-Time Data Synchronization Pipeline',
    subtitle: 'CDC-based ingestion with Kafka, Flink & Apache Iceberg for multi-datastore sync',
    duration: '4 months',
    role: 'Backend Engineer',
    problem: [
      'Flink applications lacked proper CI/CD setup, and multiple apps duplicated source code, causing inefficiencies, higher maintenance, and deployment delays.',
      'Batch processor and GDPR cleanup processor lacked robust integration testing capabilities, complicating issue identification and local testing.',
      'Spark jobs required a proper IT testing setup with Hive, Postgres, generic container, and Elasticsearch.',
    ],
    approach: [
      'Implemented automated CI/CD pipelines for Flink applications with Spinnaker, GitHub Actions, and Docker.',
      'Created and introduced a shared Docker base image to eliminate code duplication across services.',
      'Built and deployed several Flink applications using the common Docker image for smoother integration.',
      'Developed a unified integration testing framework supporting both batch processor and GDPR cleanup processor.',
      'Established a Spark integration testing environment using Hive, Postgres, generic container, and ES containers.',
      'Introduced local JAR testing to accelerate development and debugging cycles.',
    ],
    impact: [
      { metric: 'Week→Day', label: 'Onboarding Time', desc: 'Reduced from 1+ week to single day' },
      { metric: '75%', label: 'Faster Debugging', desc: 'Via automated log analysis' },
      { metric: '90%', label: 'Less Manual Testing', desc: 'Through reusable validation mechanisms' },
      { metric: '0', label: 'Code Duplication', desc: 'Eliminated redundant code across services' },
    ],
    practice: [
      'Developed and maintained reusable Docker base images, CI/CD pipeline templates, and configuration documentation.',
      'Contributed reusable integration testing frameworks, containerized environments, and log analysis utilities to the shared repository.',
      'These reusable assets have become instrumental in promoting engineering velocity, quality, and operational consistency.',
    ],
    tags: ['Apache Kafka', 'Apache Flink', 'Apache Iceberg', 'Docker', 'Spinnaker', 'GitHub Actions', 'Spark', 'Hive'],
  },
  {
    id: 'incident-p1',
    category: 'Incident Management & Leadership',
    title: 'P1 Production Incident: Data API Outage',
    subtitle: 'Cross-team coordination and resolution of critical data availability issue',
    duration: '4 days (Sep 29 – Oct 2)',
    role: 'Incident Commander',
    problem: [
      'Critical P1 production issue where marketing.marketing_data abe_dataset records appeared in Kafka and landing tables but were not accessible via the Data API.',
      'This indicated a potential delay or failure in the replicator service, affecting data availability for downstream consumers.',
      'The issue persisted across multiple days with significant system outages during peak business hours (Sep 29 - Oct 2).',
    ],
    approach: [
      'Proactively identified discrepancies between Kafka topic production and Data API availability; initiated investigation with data-replicator team.',
      'Coordinated with Platform team to analyze DataDog metrics showing spike at 12pm Pacific Time matching outage period.',
      'Monitored system health and identified replicator failure at 11:52, immediately performing manual restart.',
      'Raised threads with replicator team to investigate lag in consumption and scaling requirements.',
      'Coordinated with NoSQL team to check cluster health; verified market cluster index refresh rate settings (found 60s instead of expected 30s).',
      'Coordinated replicator resource scaling by increasing tasks.max from 1 to 3.',
      'Worked with NoSQL team to add 6 additional shards when 7 data nodes exceeded 85% capacity.',
      'Planned systematic transition from V1 to V2 to reduce Elasticsearch load and improve efficiency.',
    ],
    impact: [
      { metric: '3-5hr', label: 'MTTD', desc: 'Mean Time to Detect from first anomaly' },
      { metric: '12hr', label: 'MTTR', desc: 'Mean Time to Resolve from replicator restart' },
      { metric: '4+', label: 'Teams Coordinated', desc: 'Cross-functional incident response' },
      { metric: 'P1', label: 'Severity Classification', desc: 'Business-critical impact managed' },
    ],
    practice: [
      'Utilized repository components for automated log analysis, root cause detection, and proactive alerting.',
      'Documented technical processes and incident threads in RCA for future onboarding and rapid knowledge transfer.',
      'Established reliable support coverage patterns ensuring 24/7 operational excellence across multiple business-critical periods.',
      'Implemented metric-based post-mortem evaluation, setting reproducible benchmark for incident response.',
    ],
    tags: ['Incident Response', 'Observability', 'DataDog', 'Elasticsearch', 'Kafka', 'Leadership', 'RCA'],
  },
];

export default function Experience() {
  return (
    <div className="min-h-screen">
      <Navigation isHomePage={false} />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <AnimateOnScroll>
            <p className="section-label">Case Studies</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Impact-Driven <span className="gradient-text">Engineering</span>
            </h1>
            <p className="text-lg text-zinc-400 max-w-2xl">
              Detailed breakdowns of key projects demonstrating technical depth, system design thinking, 
              and measurable business outcomes — the work that shaped my growth toward SDE2.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Case Studies */}
      <section className="px-6 pb-32">
        <div className="max-w-5xl mx-auto space-y-24">
          {caseStudies.map((cs, idx) => (
            <AnimateOnScroll key={cs.id}>
              <article id={cs.id} className="scroll-mt-24">
                {/* Header */}
                <div className="mb-8">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                      {cs.category}
                    </span>
                    <span className="text-xs text-zinc-500">{cs.duration}</span>
                    <span className="text-xs text-zinc-600">•</span>
                    <span className="text-xs text-zinc-500">{cs.role}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{cs.title}</h2>
                  <p className="text-zinc-400">{cs.subtitle}</p>
                </div>

                {/* Impact Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                  {cs.impact.map((imp, i) => (
                    <div key={i} className="card p-5 text-center">
                      <div className="metric-number text-2xl">{imp.metric}</div>
                      <div className="text-sm font-medium text-white mt-1">{imp.label}</div>
                      <div className="text-xs text-zinc-500 mt-1">{imp.desc}</div>
                    </div>
                  ))}
                </div>

                {/* Content Grid */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {/* Problem */}
                  <div className="card p-6">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-red-400 mb-4 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      Problem
                    </h3>
                    <ul className="space-y-3 text-sm text-zinc-400">
                      {cs.problem.map((p, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="text-red-400/60 mt-0.5">•</span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Approach */}
                  <div className="card p-6">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-emerald-400 mb-4 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Approach
                    </h3>
                    <ul className="space-y-3 text-sm text-zinc-400">
                      {cs.approach.map((a, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="text-emerald-400/60 mt-0.5">▹</span>
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Practice Development */}
                <div className="card p-6 mb-6 border-l-4 border-l-amber-500/50">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-400 mb-4 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                    Practice Development & Reusable Components
                  </h3>
                  <ul className="space-y-2 text-sm text-zinc-400">
                    {cs.practice.map((p, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="text-amber-400/60 mt-0.5">◆</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {cs.tags.map((tag) => (
                    <span key={tag} className="skill-tag text-xs">{tag}</span>
                  ))}
                </div>

                {idx < caseStudies.length - 1 && (
                  <div className="border-b border-zinc-800 mt-16" />
                )}
              </article>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* Additional Experience Section */}
      <section className="px-6 pb-32 bg-zinc-950/50">
        <div className="max-w-5xl mx-auto pt-20">
          <AnimateOnScroll>
            <p className="section-label">Full Experience</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">Work History</h2>
          </AnimateOnScroll>

          <div className="space-y-12">
            <AnimateOnScroll>
              <div className="card p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-white">Software Development Engineer I</h3>
                    <p className="text-emerald-400 font-medium">Expedia Group</p>
                    <p className="text-sm text-zinc-500">Team: Data Store SDK · Bengaluru, India</p>
                  </div>
                  <span className="text-sm text-zinc-400 bg-zinc-800 px-4 py-2 rounded-lg whitespace-nowrap">
                    Sep 2023 – Present
                  </span>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-3">Core Responsibilities</h4>
                    <ul className="space-y-2 text-sm text-zinc-400">
                      <li className="flex gap-2"><span className="text-emerald-400">▹</span> Leading Data API SDK development for IDS platform</li>
                      <li className="flex gap-2"><span className="text-emerald-400">▹</span> Built Zanzibar-inspired fine-grained authorization (Merlon)</li>
                      <li className="flex gap-2"><span className="text-emerald-400">▹</span> Architected CDC pipelines with Kafka, Flink, Iceberg</li>
                      <li className="flex gap-2"><span className="text-emerald-400">▹</span> Backend lead for UI support; liaison with frontend teams</li>
                      <li className="flex gap-2"><span className="text-emerald-400">▹</span> Increased method coverage by 40%+ through rigorous testing</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-3">Key Projects</h4>
                    <ul className="space-y-2 text-sm text-zinc-400">
                      <li className="flex gap-2"><span className="text-emerald-400">▹</span> Merlon: Relation-based authorization inspired by Google Zanzibar</li>
                      <li className="flex gap-2"><span className="text-emerald-400">▹</span> DataSync: Real-time data synchronization pipeline</li>
                      <li className="flex gap-2"><span className="text-emerald-400">▹</span> Iceberg table management via Schema Deploy</li>
                      <li className="flex gap-2"><span className="text-emerald-400">▹</span> Flink apps with CI/CD automation & Docker base images</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-zinc-800">
                  <div className="flex flex-wrap gap-2">
                    {['Java', 'Spring Boot', 'Kafka', 'Flink', 'Iceberg', 'Docker', 'Kubernetes', 'Elasticsearch', 'REST APIs', 'Microservices'].map((t) => (
                      <span key={t} className="skill-tag text-xs">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <div className="card p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-white">Summer Intern</h3>
                    <p className="text-emerald-400 font-medium">VOIS (Vodafone Intelligent Solutions)</p>
                    <p className="text-sm text-zinc-500">Pune, India</p>
                  </div>
                  <span className="text-sm text-zinc-400 bg-zinc-800 px-4 py-2 rounded-lg whitespace-nowrap">
                    Jun – Sep 2022
                  </span>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-white mb-3">Blood Bank Data Management Platform</h4>
                  <ul className="space-y-2 text-sm text-zinc-400">
                    <li className="flex gap-2"><span className="text-emerald-400">▹</span> Developed a platform to consolidate blood bank data across a city</li>
                    <li className="flex gap-2"><span className="text-emerald-400">▹</span> Connected hospitals enabling quicker access to life-saving resources</li>
                    <li className="flex gap-2"><span className="text-emerald-400">▹</span> Built user-friendly interface for data exposure and transparency</li>
                  </ul>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <AnimateOnScroll>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Interested in working together?
            </h2>
            <p className="text-zinc-400 mb-8">
              I&apos;m actively looking for SDE2 roles in backend, data engineering, and distributed systems.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:dakshatalekar123@gmail.com"
                className="px-6 py-3 bg-emerald-500 text-black font-semibold rounded-lg hover:bg-emerald-400 transition-all"
              >
                Get in Touch
              </a>
              <a
                href="/resume.pdf"
                download="Daksha_Talekar_Resume.pdf"
                className="px-6 py-3 bg-zinc-800 text-white font-semibold rounded-lg border border-zinc-700 hover:bg-zinc-700 transition-all flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-zinc-800">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-zinc-500">© 2025 Daksha Talekar</p>
          <div className="flex gap-6">
            <a href="https://linkedin.com/in/daksha-talekar-a0a4b7211" target="_blank" className="text-zinc-500 hover:text-emerald-400 transition-colors text-sm">
              LinkedIn
            </a>
            <a href="https://github.com/coding-ship-it" target="_blank" className="text-zinc-500 hover:text-emerald-400 transition-colors text-sm">
              GitHub
            </a>
            <a href="mailto:dakshatalekar123@gmail.com" className="text-zinc-500 hover:text-emerald-400 transition-colors text-sm">
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
