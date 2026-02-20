'use client';

import Navigation from './components/Navigation';
import AnimateOnScroll from './components/AnimateOnScroll';
import { useState, useEffect, useRef } from 'react';

const skills = {
  'Languages & Backend': ['Java', 'C++', 'Spring Boot', 'REST APIs', 'Microservices'],
  'Data & Infrastructure': ['Apache Kafka', 'Apache Flink', 'Apache Iceberg', 'Elasticsearch', 'MongoDB', 'Scylla', 'Hive', 'Docker', 'Kubernetes'],
  'DevOps & Tools': ['Git', 'Spinnaker', 'Jenkins', 'Mockito', 'Playwright', 'DataDog', 'Splunk', 'GitHub Actions'],
  'Development Tools': ['IntelliJ IDEA', 'VS Code', 'JIRA', 'Confluence', 'Vault'],
};

const projects = [
  {
    id: 1,
    title: 'IDS Platform - Self-Serve Data Infrastructure',
    description: 'Spearheaded development of a self-serve data platform enabling 28+ dataset onboarding via unified APIs across Lodging, Marketing, and Trips.',
    tech: ['Java', 'Spring Boot', 'REST APIs', 'Microservices', 'BigQuery'],
    highlights: [
      'Onboarded 28+ datasets through unified APIs',
      'Drove 80% adoption across Lodging, Marketing, and Trips',
      'Redesigned backend APIs and Data API SDK UI flows',
      'Achieved 99.9% UI uptime with zero migration incidents'
    ],
    impact: 'Enabled single source of truth for critical business data across organization',
    year: '2024-2025'
  },
  {
    id: 2,
    title: 'Merlon - Fine-Grained Authorization System',
    description: 'Engineered Zanzibar-inspired relation-based authorization system for scalable ACL management with producer-driven onboarding.',
    tech: ['Java', 'Spring Boot', 'Authorization', 'Microservices', 'GCP'],
    highlights: [
      'Reduced policy misconfiguration incidents by 30%',
      'Fine-grained control at dataset and attribute levels',
      'Token subject-based authorization with privilege leak prevention',
      'Dynamic access policy updates and revocation'
    ],
    impact: 'Secured sensitive attribute access across 100+ team datasets',
    year: '2024-2025'
  },
  {
    id: 3,
    title: 'DataSync - Real-Time CDC Pipeline',
    description: 'Built real-time Change Data Capture synchronization using Kafka, Flink, and Apache Iceberg with advanced versioning and compliance.',
    tech: ['Apache Kafka', 'Apache Flink', 'Apache Iceberg', 'Spark', 'GCP'],
    highlights: [
      'Reduced sensitive data exposure by 40%',
      'Implemented separate PII vs non-PII retention policies',
      'Enabled advanced data versioning and time-travel queries',
      'Automated Airflow DAGs for snapshot versioning'
    ],
    impact: 'Critical backbone for data governance and compliance across platform',
    year: '2024'
  }
];

/* ─── Terminal Animation Component ────────────────────────────────── */
const terminalLines = [
  { prompt: '~', cmd: 'git log --oneline -5', delay: 60 },
  { prompt: '', cmd: 'a3f8e21 feat: onboard 28+ datasets via unified API', delay: 30, isOutput: true },
  { prompt: '', cmd: 'b7c1d09 fix: zero-downtime Kafka migration pipeline', delay: 30, isOutput: true },
  { prompt: '', cmd: 'e5a2f83 feat: Merlon RBAC with Vault integration', delay: 30, isOutput: true },
  { prompt: '', cmd: 'd9b4c17 perf: 85% deployment reliability improvement', delay: 30, isOutput: true },
  { prompt: '', cmd: 'f1e6d42 feat: Apache Iceberg PII retention policies', delay: 30, isOutput: true },
  { prompt: '~', cmd: 'kubectl get pods -n ids-platform', delay: 50 },
  { prompt: '', cmd: 'NAME                    READY   STATUS    RESTARTS', delay: 25, isOutput: true },
  { prompt: '', cmd: 'ids-api-7d8f9c6b5-x2k4  1/1     Running   0', delay: 25, isOutput: true, accent: true },
  { prompt: '', cmd: 'merlon-auth-5c4d3b-m9j1  1/1     Running   0', delay: 25, isOutput: true, accent: true },
  { prompt: '', cmd: 'datasync-6f7e8d-p3q2     1/1     Running   0', delay: 25, isOutput: true, accent: true },
  { prompt: '~', cmd: 'echo "Building the future, one commit at a time ☕"', delay: 45 },
  { prompt: '', cmd: 'Building the future, one commit at a time ☕', delay: 25, isOutput: true, accent: true },
];

function TerminalAnimation() {
  const [displayedLines, setDisplayedLines] = useState<{ text: string; isOutput?: boolean; accent?: boolean; isTyping?: boolean }[]>([]);
  const [currentLineIdx, setCurrentLineIdx] = useState(0);
  const [currentCharIdx, setCurrentCharIdx] = useState(0);
  const terminalRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  // Intersection observer to start animation when visible
  useEffect(() => {
    const el = terminalRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setStarted(true); obs.disconnect(); }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Typing effect
  useEffect(() => {
    if (!started || currentLineIdx >= terminalLines.length) return;

    const line = terminalLines[currentLineIdx];
    const fullText = line.prompt ? `\u276f ${line.cmd}` : line.cmd;

    if (line.isOutput) {
      // Output lines appear instantly with a small delay
      const timer = setTimeout(() => {
        setDisplayedLines(prev => [...prev, { text: fullText, isOutput: true, accent: line.accent }]);
        setCurrentLineIdx(i => i + 1);
        setCurrentCharIdx(0);
      }, 80);
      return () => clearTimeout(timer);
    }

    if (currentCharIdx === 0) {
      // Start a new command line with prompt
      setDisplayedLines(prev => [...prev, { text: '', isTyping: true }]);
    }

    if (currentCharIdx < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayedLines(prev => {
          const copy = [...prev];
          copy[copy.length - 1] = { text: fullText.slice(0, currentCharIdx + 1), isTyping: true };
          return copy;
        });
        setCurrentCharIdx(c => c + 1);
      }, line.delay);
      return () => clearTimeout(timer);
    } else {
      // Finished typing this line
      const timer = setTimeout(() => {
        setDisplayedLines(prev => {
          const copy = [...prev];
          copy[copy.length - 1] = { text: fullText, isTyping: false };
          return copy;
        });
        setCurrentLineIdx(i => i + 1);
        setCurrentCharIdx(0);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [started, currentLineIdx, currentCharIdx]);

  // Auto-scroll terminal
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [displayedLines]);

  return (
    <div className="max-w-2xl mx-auto">
      <div className="terminal-window rounded-xl overflow-hidden border border-[var(--border)] shadow-2xl shadow-emerald-500/5">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[#1a1a2e] border-b border-[var(--border)]">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <span className="ml-3 text-xs text-[var(--text-muted)] font-mono">daksha@dev ~ zsh</span>
        </div>
        {/* Terminal body */}
        <div
          ref={terminalRef}
          className="terminal-body bg-[#0d0d1a] px-5 py-4 font-mono text-sm leading-relaxed h-[280px] overflow-y-auto"
        >
          {displayedLines.map((line, i) => (
            <div key={i} className={`terminal-line ${line.isOutput ? 'pl-0' : ''}`}>
              {line.accent ? (
                <span className="text-[var(--accent)]">{line.text}</span>
              ) : line.isOutput ? (
                <span className="text-[var(--text-muted)]">{line.text}</span>
              ) : (
                <span className="text-[var(--text-primary)]">{line.text}</span>
              )}
              {line.isTyping && <span className="terminal-cursor" />}
            </div>
          ))}
          {currentLineIdx >= terminalLines.length && (
            <div className="terminal-line">
              <span className="text-[var(--text-primary)]">❯ </span>
              <span className="terminal-cursor" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <Navigation isHomePage={true} />

      {/* ─── HERO SECTION ───────────────────────────────────────────────── */}
      <main id="main-content">
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background elements */}
        <div className="absolute inset-0 bg-grid pointer-events-none" />
        <div className="absolute -top-40 right-40 hero-orb w-96 h-96 bg-emerald-500" />
        <div className="absolute -bottom-20 left-20 hero-orb w-80 h-80 bg-blue-500" />

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <AnimateOnScroll className="text-center">
            <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent-dim)] border border-[var(--accent-border)]">
              <span className="text-[var(--accent)] text-sm font-medium">Software Engineer at Expedia Group</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-4 leading-tight">
              <span className="gradient-text">Daksha Talekar</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-[var(--text-secondary)] mb-8">
              Software Developer
            </h2>

            <p className="text-xl md:text-2xl text-[var(--text-secondary)] mb-12 max-w-3xl mx-auto leading-relaxed">
              I build data systems that <span className="text-[var(--accent)] font-semibold">100+ teams</span> at Expedia depend on daily — from fine-grained authorization to real-time CDC pipelines.
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

            {/* ─── Animated Terminal ─────────────────────────────── */}
            <div className="mt-16 pt-16 border-t border-[var(--border)]">
              <TerminalAnimation />
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
                  I'm a Software Engineer at Expedia Group, building the Integrated Data Stores (IDS) platform — the single source of truth for critical business data. I've engineered Merlon (a Zanzibar-inspired authorization system), built DataSync (a real-time CDC pipeline with Kafka, Flink, and Iceberg), and led the IDS platform to 80% adoption across core teams.
                </p>

                <p>
                  I focus on systems that are secure, observable, and team-friendly. Outside work, I volunteer with U&I Trust, mentoring students in underprivileged communities — because engineering and mentorship both come down to creating opportunities and lasting impact.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200} className="md:col-span-1">
              <div className="card overflow-hidden sticky top-32">
                <div className="aspect-[4/5] relative">
                  <img
                    src="/coding.jpeg"
                    alt="Daksha Talekar"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <div className="text-sm font-semibold text-[var(--accent)] mb-4">KEY INTERESTS</div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-[var(--accent)]">▸</span>
                      <span className="text-sm">Distributed Systems</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[var(--accent)]">▸</span>
                      <span className="text-sm">Data Governance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[var(--accent)]">▸</span>
                      <span className="text-sm">Mentorship</span>
                    </div>
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
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="text-[var(--text-secondary)] mb-4">{project.description}</p>
                    </div>
                    <span className="text-xs font-mono text-[var(--text-muted)] bg-[var(--bg-primary)] px-3 py-1 rounded ml-4 shrink-0">
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

                  {/* Always show first 2 highlights as preview */}
                  <ul className="space-y-2 mb-2">
                    {project.highlights.slice(0, 2).map((highlight) => (
                      <li key={highlight} className="flex gap-2 text-[var(--text-secondary)] text-sm">
                        <span className="text-[var(--accent)]">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {expandedProject === project.id && (
                    <div className="mt-4 pt-4 border-t border-[var(--border)] space-y-4 animate-fade-in">
                      <ul className="space-y-2">
                        {project.highlights.slice(2).map((highlight) => (
                          <li key={highlight} className="flex gap-2 text-[var(--text-secondary)] text-sm">
                            <span className="text-[var(--accent)]">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="pt-4 border-t border-[var(--border)]">
                        <div className="font-semibold text-[var(--accent)] mb-2">Impact</div>
                        <p className="text-[var(--text-secondary)]">{project.impact}</p>
                      </div>
                    </div>
                  )}

                  <div className="mt-4 flex items-center gap-2 text-[var(--accent)] text-sm font-medium">
                    <span>{expandedProject === project.id ? 'Show less' : 'See all highlights →'}</span>
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


            </div>
          </div>

          <AnimateOnScroll delay={300} className="mt-16 pt-16 border-t border-[var(--border)] text-center">
            <a
              href="/case-studies"
              className="inline-flex items-center px-8 py-4 bg-[var(--accent)] text-black font-semibold rounded-lg hover:bg-emerald-400 transition-all gap-2"
            >
              View Case Studies
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

      </main>

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
