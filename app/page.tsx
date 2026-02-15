import Link from 'next/link';
import AnimateOnScroll from './components/AnimateOnScroll';
import Navigation from './components/Navigation';

const metrics = [
  { value: '100+', label: 'Issues Delivered', context: '97% completion rate' },
  { value: '40%', label: 'Faster API Response', context: 'via architecture migration' },
  { value: '99.9%', label: 'UI Uptime', context: 'zero migration incidents' },
  { value: '75%', label: 'Fewer Support Tickets', context: 'improved reliability' },
];

const skills = {
  'Languages': ['Java', 'Python', 'TypeScript', 'SQL'],
  'Backend': ['Spring Boot', 'REST APIs', 'Microservices', 'GraphQL'],
  'Data & Streaming': ['Apache Kafka', 'Apache Flink', 'Apache Iceberg', 'Spark'],
  'Databases': ['PostgreSQL', 'Elasticsearch', 'Hive', 'DynamoDB'],
  'DevOps & Cloud': ['Docker', 'Kubernetes', 'Spinnaker', 'GitHub Actions', 'AWS'],
  'Tools': ['DataDog', 'Airflow', 'Backstage', 'CI/CD Pipelines'],
};

const caseStudies = [
  {
    id: 'merlon-fga',
    title: 'Fine-Grained Authorization System (Merlon)',
    subtitle: 'Google Zanzibar-inspired access control at dataset & attribute level',
    impact: ['Dataset + Attribute ACL', 'TTL-based access', 'Full-stack ownership'],
    tags: ['System Design', 'Authorization', 'Spring Boot', 'React'],
  },
  {
    id: 'api-migration',
    title: 'Data API SDK & UI Re-architecture',
    subtitle: 'Eliminating bottlenecks in Expedia\'s data platform',
    impact: ['40% faster APIs', '99.9% uptime', '75% fewer tickets'],
    tags: ['System Design', 'API Migration', 'Spring Boot'],
  },
  {
    id: 'data-sync',
    title: 'Real-Time Data Synchronization Pipeline',
    subtitle: 'CDC-based ingestion with Kafka, Flink & Iceberg',
    impact: ['Week→Day onboarding', 'Zero code duplication', 'Production stable'],
    tags: ['Kafka', 'Flink', 'Apache Iceberg', 'CI/CD'],
  },
  {
    id: 'incident-p1',
    title: 'P1 Production Incident Management',
    subtitle: 'Cross-team coordination under pressure',
    impact: ['3-5hr MTTD', '12hr MTTR', '4+ teams coordinated'],
    tags: ['Incident Response', 'Leadership', 'Observability'],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <Navigation isHomePage />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-pattern">
        <div className="hero-glow -top-32 -right-32" />
        <div className="hero-glow bottom-0 left-0 opacity-50" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="opacity-0 animate-fade-in-up">
            <p className="section-label justify-center mb-6">
              Software Development Engineer
            </p>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight opacity-0 animate-fade-in-up delay-100">
            <span className="text-white">Daksha</span>
            <span className="gradient-text ml-4">Talekar</span>
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed opacity-0 animate-fade-in-up delay-200">
            Building scalable data platforms at <span className="text-white font-medium">Expedia Group</span>.
            I design systems that handle millions of events, reduce operational overhead, and make data discoverable.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-16 opacity-0 animate-fade-in-up delay-300">
            <a
              href="#work"
              className="px-6 py-3 bg-emerald-500 text-black font-semibold rounded-lg hover:bg-emerald-400 transition-all hover:shadow-lg hover:shadow-emerald-500/20"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-zinc-800 text-white font-semibold rounded-lg border border-zinc-700 hover:bg-zinc-700 hover:border-zinc-600 transition-all"
            >
              Get in Touch
            </a>
          </div>

          {/* Metrics Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 opacity-0 animate-fade-in-up delay-400">
            {metrics.map((m, i) => (
              <div key={i} className="text-center">
                <div className="metric-number">{m.value}</div>
                <div className="text-sm text-zinc-400 mt-1">{m.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in delay-700">
          <div className="w-6 h-10 border-2 border-zinc-600 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-emerald-400 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <AnimateOnScroll>
            <p className="section-label">About Me</p>
          </AnimateOnScroll>
          
          <div className="grid md:grid-cols-5 gap-12 items-start">
            <div className="md:col-span-3">
              <AnimateOnScroll delay={100}>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                  I build the backbone of data-driven products.
                </h2>
              </AnimateOnScroll>
              
              <AnimateOnScroll delay={200}>
                <div className="space-y-4 text-zinc-400 leading-relaxed">
                  <p>
                    At <span className="text-white">Expedia Group</span>, I work on the Integrated Data Stores (IDS) platform — the single source of truth for entities like Travelers, Supply, Places, and Trips used by teams across the organization.
                  </p>
                  <p>
                    My focus is on making data <span className="text-emerald-400">trustworthy</span>, <span className="text-emerald-400">discoverable</span>, and <span className="text-emerald-400">accessible at scale</span>. Through Java, Spring Boot, Kafka, Flink, and modern data architectures, I ensure everything from personalization to analytics runs on clean, reliable foundations.
                  </p>
                  <p>
                    Beyond code, I volunteer with <span className="text-white">U&I Trust</span>, mentoring underprivileged students — because platforms and people both deserve strong foundations.
                  </p>
                </div>
              </AnimateOnScroll>
            </div>

            <div className="md:col-span-2">
              <AnimateOnScroll delay={300}>
                <div className="card p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Quick Facts</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-3">
                      <span className="text-emerald-400 mt-0.5">▹</span>
                      <span className="text-zinc-400">2+ years building production data systems</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-emerald-400 mt-0.5">▹</span>
                      <span className="text-zinc-400">Led API migration serving 1000s of requests/sec</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-emerald-400 mt-0.5">▹</span>
                      <span className="text-zinc-400">Built CDC pipelines processing millions of events</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-emerald-400 mt-0.5">▹</span>
                      <span className="text-zinc-400">High Five Awardee at Expedia Group</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-emerald-400 mt-0.5">▹</span>
                      <span className="text-zinc-400">B.Tech from Cummins College of Engineering (2023)</span>
                    </li>
                  </ul>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Work / Case Studies Section */}
      <section id="work" className="py-32 px-6 bg-zinc-950/50">
        <div className="max-w-5xl mx-auto">
          <AnimateOnScroll>
            <p className="section-label">Featured Work</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Impact-Driven Engineering</h2>
            <p className="text-zinc-400 mb-12 max-w-2xl">
              Selected projects demonstrating system design, cross-team leadership, and measurable business impact.
            </p>
          </AnimateOnScroll>

          <div className="space-y-6">
            {caseStudies.map((cs, i) => (
              <AnimateOnScroll key={cs.id} delay={i * 100}>
                <Link href={`/experience#${cs.id}`}>
                  <div className="case-study group cursor-pointer">
                    <div className="case-study-header">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                            {cs.title}
                          </h3>
                          <p className="text-zinc-500 mt-1">{cs.subtitle}</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {cs.impact.map((imp, j) => (
                            <span key={j} className="impact-badge">{imp}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="case-study-body flex flex-wrap gap-2">
                      {cs.tags.map((tag) => (
                        <span key={tag} className="skill-tag text-xs">{tag}</span>
                      ))}
                      <span className="ml-auto flex items-center text-sm text-zinc-500 group-hover:text-emerald-400 transition-colors">
                        Read Case Study
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <AnimateOnScroll>
            <p className="section-label">Technical Skills</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">Tech Stack</h2>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items], i) => (
              <AnimateOnScroll key={category} delay={i * 100}>
                <div className="card p-6 card-accent">
                  <h3 className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-4">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span key={skill} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="py-32 px-6 bg-zinc-950/50">
        <div className="max-w-5xl mx-auto">
          <AnimateOnScroll>
            <p className="section-label">Experience</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">Career Journey</h2>
          </AnimateOnScroll>

          <div className="relative pl-8">
            <div className="timeline-line" />

            <AnimateOnScroll>
              <div className="flex gap-6 mb-12">
                <div className="timeline-dot mt-1.5" />
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">Software Development Engineer I</h3>
                    <span className="text-sm text-emerald-400 font-medium">Sep 2023 – Present</span>
                  </div>
                  <p className="text-zinc-400 font-medium mb-3">Expedia Group · Bengaluru</p>
                  <ul className="space-y-2 text-zinc-400 text-sm">
                    <li className="flex gap-2"><span className="text-emerald-400">▹</span> Leading Data Store SDK & UI for IDS platform</li>
                    <li className="flex gap-2"><span className="text-emerald-400">▹</span> Built Zanzibar-inspired fine-grained authorization (Merlon)</li>
                    <li className="flex gap-2"><span className="text-emerald-400">▹</span> Architected CDC pipelines with Kafka, Flink, Iceberg</li>
                    <li className="flex gap-2"><span className="text-emerald-400">▹</span> Reduced API latency 40%, achieved 99.9% uptime</li>
                  </ul>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={100}>
              <div className="flex gap-6">
                <div className="timeline-dot timeline-dot-inactive mt-1.5" />
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">Summer Intern</h3>
                    <span className="text-sm text-zinc-500 font-medium">Jun – Sep 2022</span>
                  </div>
                  <p className="text-zinc-400 font-medium mb-3">VOIS (Vodafone) · Pune</p>
                  <ul className="space-y-2 text-zinc-400 text-sm">
                    <li className="flex gap-2"><span className="text-emerald-400">▹</span> Built blood bank data aggregation platform</li>
                    <li className="flex gap-2"><span className="text-emerald-400">▹</span> Connected hospitals for faster life-saving resource access</li>
                  </ul>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Recommendations Section */}
      <section id="recommendations" className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <AnimateOnScroll>
            <p className="section-label">Testimonials</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">What Colleagues Say</h2>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <div className="card p-8 md:p-10 relative overflow-hidden">
              <div className="absolute top-6 right-8 text-8xl text-zinc-800 font-serif leading-none">&ldquo;</div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-full flex items-center justify-center text-black font-bold">
                    UA
                  </div>
                  <div>
                    <div className="font-semibold text-white">Utkarshini Acharya</div>
                    <div className="text-sm text-zinc-500">SDE II at Expedia Group</div>
                  </div>
                </div>
                <blockquote className="text-zinc-300 leading-relaxed">
                  &ldquo;In the context of fast-paced and high-impact projects, she demonstrated <span className="text-white">strong initiative</span> and made meaningful contributions to important product features. Her consistency and alignment with our team&apos;s standards made her a <span className="text-emerald-400">reliable and valuable team member</span>. She navigated challenges with maturity and a solutions-oriented mindset. Beyond technical strengths, she brought <span className="text-white">excellent interpersonal skills</span> — clear communication, collaboration, and a thoughtful approach to cross-functional work.&rdquo;
                </blockquote>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-32 px-6 bg-zinc-950/50">
        <div className="max-w-5xl mx-auto">
          <AnimateOnScroll>
            <p className="section-label">Recognition</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">Awards & Achievements</h2>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'High Five Award & Travel Award', org: 'Expedia Group', desc: 'Exceptional performance and project delivery impacting platform reliability' },
              { title: 'LPF Scholar', org: '2020', desc: 'Prestigious scholarship for academic excellence and leadership potential' },
              { title: 'Google Kickstart Participant', org: '2022', desc: 'Competitive programming demonstrating algorithmic problem-solving' },
              { title: 'Volunteer Teacher', org: 'U&I Organization', desc: 'Teaching English to grades 7-9, empowering next generation' },
            ].map((award, i) => (
              <AnimateOnScroll key={award.title} delay={i * 100}>
                <div className="card p-6 flex gap-5">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{award.title}</h3>
                    <p className="text-sm text-emerald-400 mb-1">{award.org}</p>
                    <p className="text-sm text-zinc-500">{award.desc}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <AnimateOnScroll>
            <p className="section-label justify-center">Get in Touch</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Let&apos;s Build Something Together</h2>
            <p className="text-zinc-400 mb-10 max-w-xl mx-auto">
              Open to SDE2 roles in backend, data engineering, and distributed systems.
              If you have an interesting challenge, I&apos;d love to hear about it.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <a
              href="mailto:dakshatalekar123@gmail.com"
              className="inline-flex items-center px-8 py-4 bg-emerald-500 text-black font-bold rounded-xl hover:bg-emerald-400 transition-all hover:shadow-lg hover:shadow-emerald-500/20 text-lg"
            >
              Say Hello
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <div className="flex justify-center gap-6 mt-12">
              {[
                { href: 'mailto:dakshatalekar123@gmail.com', label: 'Email', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
                { href: 'https://linkedin.com/in/daksha-talekar-a0a4b7211', label: 'LinkedIn', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z', viewBox: '0 0 24 24' },
                { href: 'https://github.com/coding-ship-it', label: 'GitHub', icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.30 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z', viewBox: '0 0 24 24' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('mailto') ? undefined : '_blank'}
                  className="w-12 h-12 bg-zinc-800 border border-zinc-700 rounded-xl flex items-center justify-center text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-all"
                  aria-label={social.label}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox={social.viewBox || '0 0 24 24'}>
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-zinc-800">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-zinc-500">© 2025 Daksha Talekar. Built with Next.js & Tailwind CSS.</p>
          <a
            href="/resume.pdf"
            download="Daksha_Talekar_Resume.pdf"
            className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume
          </a>
        </div>
      </footer>
    </div>
  );
}
