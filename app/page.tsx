'use client';

import Navigation from './components/Navigation';
import AnimateOnScroll from './components/AnimateOnScroll';
import { useState } from 'react';

const skills = {
  'Languages': ['Java', 'TypeScript', 'Python', 'SQL'],
  'Frameworks': ['Spring Boot', 'Spring Framework', 'Next.js', 'React'],
  'Data & Streaming': ['Apache Kafka', 'Apache Flink', 'Apache Iceberg', 'Dataproc'],
  'Databases': ['BigQuery', 'Hive', 'PostgreSQL'],
  'Tools & Cloud': ['GCP', 'Docker', 'Kubernetes', 'Spinnaker', 'GitHub Actions', 'Airflow'],
};

const projects = [
  {
    id: 1,
    title: 'Merlon - Fine-Grained Authorization System',
    description: 'Zanzibar-inspired relation-based authorization model for scalable ACL management with producer-driven onboarding and dynamic access policies.',
    tech: ['Java', 'Spring Boot', 'Authorization', 'Microservices'],
    highlights: [
      'Fine-grained control at dataset and attribute levels',
      'Producer-driven onboarding workflows',
      'Token subject-based authorization',
      'Sensitive field protection (PII masking)'
    ],
    impact: 'Enabled secure, scalable data access across 100+ teams',
    year: '2024-2025'
  },
  {
    id: 2,
    title: 'DataSync - Real-Time Pipeline',
    description: 'CDC-based ingestion pipeline synchronizing datasets across multiple datastores using Kafka, Flink, and Apache Iceberg.',
    tech: ['Apache Kafka', 'Apache Flink', 'Apache Iceberg', 'SQL'],
    highlights: [
      'Change Data Capture (CDC) ingestion',
      'Snapshotting & rollback capabilities',
      'Time-travel queries support',
      'Separate PII/non-PII retention policies'
    ],
    impact: 'Reduced data sync latency by 65%, improved compliance tracking',
    year: '2024'
  },
  {
    id: 3,
    title: 'Blood Bank Data Consolidation Platform',
    description: 'Web platform consolidating blood bank data across a city, connecting hospitals for quick access to life-saving resources.',
    tech: ['Full Stack', 'PostgreSQL', 'REST APIs'],
    highlights: [
      'Real-time blood inventory tracking',
      'Hospital network integration',
      'User-friendly search interface',
      'Emergency alert system'
    ],
    impact: 'Connected 50+ hospitals, improved emergency response time by 40%',
    year: '2022'
  }
];

export default function Home() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <Navigation isHomePage={true} />

      {/* ─── HERO SECTION ───────────────────────────────────────────────── */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background elements */}
        <div className="absolute inset-0 bg-grid pointer-events-none" />
        <div className="absolute -top-40 right-40 hero-orb w-96 h-96 bg-emerald-500" />
        <div className="absolute -bottom-20 left-20 hero-orb w-80 h-80 bg-blue-500" />

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <AnimateOnScroll className="text-center">
            <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent-dim)] border border-[var(--accent-border)]">
              <span className="text-[var(--accent)] text-sm font-medium">Welcome to my portfolio</span>
              <span className="text-xl">👋</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              <span className="gradient-text">Crafting Data Systems </span>
              <span className="block text-[var(--accent)]">That Scale & Secure</span>
            </h1>

            <p className="text-xl md:text-2xl text-[var(--text-secondary)] mb-12 max-w-3xl mx-auto leading-relaxed">
              Software Engineer at Expedia building distributed data platforms. Passionate about systems design, security, and mentoring the next generation of engineers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#projects"
                className="px-8 py-4 bg-[var(--accent)] text-black font-semibold rounded-lg hover:bg-emerald-400 transition-all hover:shadow-lg hover:shadow-emerald-500/30 inline-flex items-center justify-center gap-2"
              >
                View My Work
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border border-[var(--border-hover)] text-[var(--text-primary)] font-semibold rounded-lg hover:bg-[var(--bg-card)] transition-all inline-flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Get in Touch
              </a>
            </div>

            <div className="mt-16 pt-16 border-t border-[var(--border)] flex flex-col md:flex-row justify-center gap-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--accent)]">2+ years</div>
                <div className="text-[var(--text-secondary)]">Industry Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--accent)]">100+</div>
                <div className="text-[var(--text-secondary)]">Supported Teams</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--accent)]">5+</div>
                <div className="text-[var(--text-secondary)]">Major Systems Built</div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ─── ABOUT SECTION ───────────────────────────────────────────────── */}
      <section id="about" className="py-32 px-6 bg-[var(--bg-secondary)]">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll>
            <div className="mb-16">
              <div className="section-label mb-4">About</div>
              <h2 className="text-5xl md:text-6xl font-bold mb-8">Building Reliable Foundations</h2>
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimateOnScroll delay={100} className="md:col-span-2">
              <div className="space-y-6 text-[var(--text-secondary)] leading-relaxed">
                <p>
                  I'm a Software Engineer at Expedia Group, working on the Integrated Data Stores (IDS) platform — the backbone for some of Expedia's most critical data infrastructure. My focus is designing scalable, secure, and observable systems that enable teams across the organization to trust and leverage data confidently.
                </p>

                <p>
                  Beyond building systems, I'm deeply interested in authorization patterns, data governance, and system reliability. At Expedia, I've designed fine-grained access control models inspired by industry standards like Zanzibar, led real-time data synchronization pipelines, and increased code coverage by 40% through rigorous testing practices.
                </p>

                <p>
                  Earlier in my career, I interned at VOIS (Vodafone Intelligent Solutions), where I built a blood bank data consolidation platform that connected hospitals and improved emergency resource access. That experience reinforced my belief that good engineering solves real human problems.
                </p>

                <p>
                  Outside of work, I mentor students through U&I Trust, a non-profit empowering disadvantaged communities in India. Teaching isn't just about academics — it's about building confidence, instilling ownership, and creating opportunities for the next generation.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200} className="md:col-span-1">
              <div className="card p-8 sticky top-32">
                <div className="text-sm font-semibold text-[var(--accent)] mb-6">KEY INTERESTS</div>
                <div className="space-y-4">
                  <div>
                    <div className="font-semibold mb-1">Systems Design</div>
                    <div className="text-sm text-[var(--text-secondary)]">Scalable, observable architecture</div>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Data Governance</div>
                    <div className="text-sm text-[var(--text-secondary)]">Authorization & compliance</div>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Mentorship</div>
                    <div className="text-sm text-[var(--text-secondary)]">Growing the next generation</div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ─── SKILLS SECTION ───────────────────────────────────────────────── */}
      <section id="skills" className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll>
            <div className="mb-16">
              <div className="section-label mb-4">Skills</div>
              <h2 className="text-5xl md:text-6xl font-bold">Technical Arsenal</h2>
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 gap-12">
            {Object.entries(skills).map(([ category, techs ], idx) => (
              <AnimateOnScroll key={category} delay={idx * 100} className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-[var(--text-primary)]">{category}</h3>
                  <div className="flex flex-wrap gap-3">
                    {techs.map((tech) => (
                      <span key={tech} className="skill-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROJECTS SECTION ───────────────────────────────────────────────── */}
      <section id="projects" className="py-32 px-6 bg-[var(--bg-secondary)]">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll>
            <div className="mb-16">
              <div className="section-label mb-4">Portfolio</div>
              <h2 className="text-5xl md:text-6xl font-bold">Featured Projects</h2>
            </div>
          </AnimateOnScroll>

          <div className="space-y-8">
            {projects.map((project, idx) => (
              <AnimateOnScroll key={project.id} delay={idx * 100}>
                <div className="card p-8 cursor-pointer" onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="text-[var(--text-secondary)] mb-4">{project.description}</p>
                    </div>
                    <span className="text-xs font-mono text-[var(--text-muted)] bg-[var(--bg-primary)] px-3 py-1 rounded">
                      {project.year}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span key={t} className="skill-tag text-xs">
                        {t}
                      </span>
                    ))}
                  </div>

                  {expandedProject === project.id && (
                    <div className="mt-6 pt-6 border-t border-[var(--border)] space-y-4">
                      <div>
                        <h4 className="font-semibold text-[var(--accent)] mb-3">Key Highlights</h4>
                        <ul className="space-y-2">
                          {project.highlights.map((highlight) => (
                            <li key={highlight} className="flex gap-2 text-[var(--text-secondary)]">
                              <span className="text-[var(--accent)]">•</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="pt-4 border-t border-[var(--border)]">
                        <div className="font-semibold text-[var(--accent)] mb-2">Impact</div>
                        <p className="text-[var(--text-secondary)]">{project.impact}</p>
                      </div>
                    </div>
                  )}

                  <div className="mt-4 text-[var(--text-muted)] text-sm">
                    {expandedProject === project.id ? 'Click to collapse' : 'Click to expand'}
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─── EXPERIENCE SECTION ───────────────────────────────────────────────── */}
      <section id="experience" className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll>
            <div className="mb-16">
              <div className="section-label mb-4">Experience</div>
              <h2 className="text-5xl md:text-6xl font-bold">Professional Journey</h2>
            </div>
          </AnimateOnScroll>

          <div className="relative">
            <div className="timeline-line" />
            <div className="space-y-12">
              {/* Expedia */}
              <AnimateOnScroll delay={100}>
                <div className="relative pl-16">
                  <div className="timeline-dot absolute -left-6 top-2" />
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-xl font-bold">Software Development Engineer I</h3>
                        <div className="text-[var(--accent)] font-semibold">Expedia Group</div>
                      </div>
                      <span className="text-sm text-[var(--text-muted)]">Sept 2023 – Present</span>
                    </div>
                    <p className="text-[var(--text-secondary)] mb-3">Bengaluru, India</p>
                    <ul className="space-y-2 text-[var(--text-secondary)]">
                      <li>🔒 Designed Zanzibar-inspired fine-grained authorization system (Merlon) supporting 100+ teams</li>
                      <li>📊 Built DataSync CDC pipeline with Kafka, Flink, and Iceberg for real-time synchronization</li>
                      <li>✅ Increased method coverage by 40% through rigorous unit and integration testing</li>
                      <li>🔧 Implemented Spring Boot microservices and APIs for self-served data platform</li>
                    </ul>
                  </div>
                </div>
              </AnimateOnScroll>

              {/* VOIS */}
              <AnimateOnScroll delay={200}>
                <div className="relative pl-16">
                  <div className="timeline-dot-muted absolute -left-6 top-2" />
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-xl font-bold">Summer Intern</h3>
                        <div className="text-[var(--text-secondary)] font-semibold">VOIS (Vodafone Intelligent Solutions)</div>
                      </div>
                      <span className="text-sm text-[var(--text-muted)]">Jun – Sep 2022</span>
                    </div>
                    <p className="text-[var(--text-secondary)] mb-3">Pune, India</p>
                    <p className="text-[var(--text-secondary)]">🩸 Developed blood bank data consolidation platform connecting 50+ hospitals for life-saving resource access</p>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>

          <AnimateOnScroll delay={300} className="mt-16 pt-16 border-t border-[var(--border)] text-center">
            <a
              href="http://experience"
              className="inline-flex items-center px-8 py-4 bg-[var(--accent)] text-black font-semibold rounded-lg hover:bg-emerald-400 transition-all gap-2"
            >
              View Full Experience
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ─── RECOMMENDATIONS SECTION ───────────────────────────────────────────────── */}
      <section id="recommendations" className="py-32 px-6 bg-[var(--bg-secondary)]">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll>
            <div className="mb-16">
              <div className="section-label mb-4">Social Proof</div>
              <h2 className="text-5xl md:text-6xl font-bold">What Colleagues Say</h2>
            </div>
          </AnimateOnScroll>

          <div className="card p-8">
            <div className="flex gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-[var(--accent)]/20 flex items-center justify-center text-[var(--accent)] font-bold">
                UA
              </div>
              <div>
                <div className="font-semibold">Utkarshini Acharya</div>
                <div className="text-sm text-[var(--text-secondary)]">SDE II, Expedia Group</div>
                <div className="text-xs text-[var(--text-muted)]">Senior collaborator</div>
              </div>
            </div>
            <blockquote className="text-[var(--text-secondary)] italic leading-relaxed">
              "Daksha impressed me with her technical growth, ownership of complex tasks, and remarkable progress over time. Her ability to navigate challenges with maturity, combined with her excellent communication skills and solutions-oriented mindset, makes her a valuable team member. She's growing immensely and will thrive wherever she goes."
            </blockquote>
          </div>
        </div>
      </section>

      {/* ─── AWARDS SECTION ───────────────────────────────────────────────── */}
      <section id="awards" className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll>
            <div className="mb-16">
              <div className="section-label mb-4">Recognition</div>
              <h2 className="text-5xl md:text-6xl font-bold">Awards & Achievements</h2>
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 gap-6">
            <AnimateOnScroll delay={100} className="card p-6">
              <div className="flex gap-3 items-start">
                <div className="text-2xl">⭐</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">High Five Awardee</h3>
                  <p className="text-[var(--text-secondary)] text-sm">Expedia Group – Exceptional performance and innovation</p>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={150} className="card p-6">
              <div className="flex gap-3 items-start">
                <div className="text-2xl">🏆</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Travel Award</h3>
                  <p className="text-[var(--text-secondary)] text-sm">Expedia Group – Outstanding platform contribution</p>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200} className="card p-6">
              <div className="flex gap-3 items-start">
                <div className="text-2xl">🎓</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">LPF Scholar (2020)</h3>
                  <p className="text-[var(--text-secondary)] text-sm">Recognized for academic excellence</p>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={250} className="card p-6">
              <div className="flex gap-3 items-start">
                <div className="text-2xl">📚</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Google Kickstart '22</h3>
                  <p className="text-[var(--text-secondary)] text-sm">Competitive programming participant</p>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={300} className="card p-6">
              <div className="flex gap-3 items-start">
                <div className="text-2xl">👨‍🏫</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Volunteer Educator</h3>
                  <p className="text-[var(--text-secondary)] text-sm">U&I Trust – Teaching English to grades 7–9</p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ─── CONTACT SECTION ───────────────────────────────────────────────── */}
      <section id="contact" className="py-32 px-6 bg-[var(--bg-secondary)]">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <div className="section-label mb-4 justify-center flex">Contact</div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6">Let's Build Something Great</h2>
              <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
                Have an interesting project or opportunity? Reach out — I'm always open to discussing systems design, collaboration, and growth.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={100} className="flex flex-col md:flex-row gap-6 justify-center">
            <a
              href="mailto:dakshatalekar123@gmail.com"
              className="card px-8 py-6 text-center hover:bg-[var(--bg-card-hover)] group"
            >
              <div className="text-3xl mb-3">✉️</div>
              <div className="font-semibold group-hover:text-[var(--accent)] transition-colors">Email</div>
              <div className="text-sm text-[var(--text-secondary)]">dakshatalekar123@gmail.com</div>
            </a>

            <a
              href="https://linkedin.com/in/daksha-talekar-a0a4b7211"
              target="_blank"
              rel="noopener noreferrer"
              className="card px-8 py-6 text-center hover:bg-[var(--bg-card-hover)] group"
            >
              <div className="text-3xl mb-3">💼</div>
              <div className="font-semibold group-hover:text-[var(--accent)] transition-colors">LinkedIn</div>
              <div className="text-sm text-[var(--text-secondary)]">Connect with me</div>
            </a>

            <a
              href="https://github.com/coding-ship-it"
              target="_blank"
              rel="noopener noreferrer"
              className="card px-8 py-6 text-center hover:bg-[var(--bg-card-hover)] group"
            >
              <div className="text-3xl mb-3">💻</div>
              <div className="font-semibold group-hover:text-[var(--accent)] transition-colors">GitHub</div>
              <div className="text-sm text-[var(--text-secondary)]">View my code</div>
            </a>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200} className="mt-16 pt-16 border-t border-[var(--border)] text-center">
            <a
              href="/resume.pdf"
              download="Daksha_Talekar_Resume.pdf"
              className="inline-flex items-center px-8 py-4 bg-[var(--accent)] text-black font-semibold rounded-lg hover:bg-emerald-400 transition-all gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </a>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ─── FOOTER ───────────────────────────────────────────────────────────────── */}
      <footer className="py-12 px-6 bg-[var(--bg-primary)] border-t border-[var(--border)]">
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
