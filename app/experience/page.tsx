import Link from 'next/link';
import Image from 'next/image';
import Navigation from '../components/Navigation';
import AnimateOnScroll from '../components/AnimateOnScroll';

export const metadata = {
  title: "Experience - Daksha Talekar",
  description: "Professional experience, projects, and achievements - Daksha Talekar",
};

const educationData = [
  {
    degree: "B.Tech in Electronics and Telecommunication",
    university: "MKSSS'S Cummins College Of Engineering, Pune",
    year: "Aug 2020 – May 2023 (Lateral Entry)",
    gpa: "8.2 / 10",
    highlights: ["LPF Scholar 2020", "Consistent Dean's List", "Google Kickstart Participant 2022"]
  }
];

export default function Experience() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <Navigation isHomePage={false} />

      <main className="max-w-4xl mx-auto px-6 pt-24 pb-16">
        {/* ───── About Section ────── */}
        <section className="mb-20">
          <AnimateOnScroll>
            <div className="mb-12">
              <div className="section-label mb-4">Profile</div>
              <h1 className="text-5xl md:text-6xl font-bold mb-8">Full Story</h1>
            </div>

            <div className="space-y-6 text-[var(--text-secondary)] leading-relaxed text-lg">
              <p>
                Hi, I'm Daksha Talekar — a Software Engineer at Expedia Group building scalable data systems and reliable infrastructure. I specialize in designing secure, observable data platforms that enable thousands of engineers to confidently leverage data at scale.
              </p>

              <p>
                At Expedia, I work on the Integrated Data Stores (IDS) platform, a foundational system serving as the single source of truth for critical business data. My contributions span across designing fine-grained authorization systems (Merlon - inspired by Google Zanzibar), building real-time data synchronization pipelines (DataSync), and implementing comprehensive CI/CD automation. I'm committed to writing rigorous tests, high-quality documentation, and collaborating across teams to solve problems that matter to the organization.
              </p>

              <p>
                My journey into tech was driven by a desire to create impact through well-engineered systems. I've worked on authorization patterns, data governance, stream processing with Kafka and Flink, and production-grade infrastructure. Whether designing for scale, security, or reliability, I focus on building systems that are not just technically sound but also maintainable and user-friendly for the teams who depend on them.
              </p>

              <p>
                Outside of work, I volunteer with U&I Trust, a non-profit empowering disadvantaged communities across India. Teaching and mentoring young individuals is as important to me as engineering - both are about creating opportunities, building confidence, and making lasting impact.
              </p>

              <p>
                I'm passionate about systems thinking, distributed systems, data engineering, competitive programming, and continuous learning. When not coding, you'll find me exploring new technologies, reading about system design patterns, or collaborating with peers on interesting problems.
              </p>
            </div>
          </AnimateOnScroll>
        </section>

        {/* ───── Professional Experience Section ────── */}
        <section className="mb-20">
          <AnimateOnScroll>
            <div className="mb-12">
              <div className="section-label mb-4">Work History</div>
              <h2 className="text-4xl md:text-5xl font-bold">Professional Experience</h2>
            </div>
          </AnimateOnScroll>

          <div className="relative">
            <div className="timeline-line" />

            <div className="space-y-16">
              {/* Expedia Group Experience */}
              <AnimateOnScroll delay={100} className="relative pl-16">
                <div className="timeline-dot absolute -left-6 top-2" />

                <div className="card p-8">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-3xl font-bold mb-2">Software Development Engineer I</h3>
                      <div className="text-[var(--accent)] font-semibold text-lg mb-1">Expedia Group</div>
                      <div className="text-[var(--text-muted)]">Integrated Data Stores (IDS) Platform | Bengaluru, India</div>
                    </div>
                    <div className="text-right mt-4 md:mt-0">
                      <div className="text-sm font-mono text-[var(--text-muted)] bg-[var(--bg-primary)] px-3 py-1 rounded inline-block">
                        Sept 2023 – Present (2yr)
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6 mt-6">
                    {/* IDS Platform */}
                    <div className="border-l-2 border-[var(--accent-border)] pl-4">
                      <h4 className="font-bold text-[var(--accent)] mb-2">IDS Platform - Self-Serve Data Infrastructure</h4>
                      <p className="text-[var(--text-secondary)] mb-3">
                        Spearheaded development and enhancement of the self-serve data platform, enabling 28+ dataset onboarding via unified APIs.
                      </p>
                      <ul className="space-y-2 text-[var(--text-secondary)] text-sm">
                        <li>✓ Onboarded 28+ datasets with 80% adoption across Lodging, Marketing & Trips teams</li>
                        <li>✓ Redesigned backend APIs and Data API SDK UI flows to simplify frontend integration</li>
                        <li>✓ Achieved 99.9% UI uptime with zero migration incidents</li>
                        <li>✓ Led cross-timezone collaboration, acted as SME for IDS features</li>
                        <li>✓ Performance award for exceeding expectations over two quarters</li>
                      </ul>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <span className="skill-tag text-xs">Java</span>
                        <span className="skill-tag text-xs">Spring Boot</span>
                        <span className="skill-tag text-xs">REST APIs</span>
                        <span className="skill-tag text-xs">Microservices</span>
                      </div>
                    </div>

                    {/* Merlon Project */}
                    <div className="border-l-2 border-[var(--accent-border)] pl-4">
                      <h4 className="font-bold text-[var(--accent)] mb-2">Merlon — Zanzibar-Inspired Authorization System</h4>
                      <p className="text-[var(--text-secondary)] mb-3">
                        Engineered relation-based fine-grained authorization system for scalable ACL management with 30% reduction in policy misconfiguration incidents.
                      </p>
                      <ul className="space-y-2 text-[var(--text-secondary)] text-sm">
                        <li>✓ Reduced policy misconfiguration incidents by 30%</li>
                        <li>✓ Fine-grained control at both dataset and attribute levels</li>
                        <li>✓ Token subject-based authorization preventing privilege leaks</li>
                        <li>✓ Producer-driven onboarding workflows for data owners</li>
                        <li>✓ Dynamic access policy updates and revocation support</li>
                      </ul>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <span className="skill-tag text-xs">Java</span>
                        <span className="skill-tag text-xs">Authorization</span>
                        <span className="skill-tag text-xs">GCP</span>
                        <span className="skill-tag text-xs">Microservices</span>
                      </div>
                    </div>

                    {/* DataSync Project */}
                    <div className="border-l-2 border-[var(--accent-border)] pl-4">
                      <h4 className="font-bold text-[var(--accent)] mb-2">DataSync — Real-Time CDC Synchronization Pipeline</h4>
                      <p className="text-[var(--text-secondary)] mb-3">
                        Built real-time Change Data Capture pipeline using Kafka, Flink, and Apache Iceberg with 40% reduction in sensitive data exposure.
                      </p>
                      <ul className="space-y-2 text-[var(--text-secondary)] text-sm">
                        <li>✓ Reduced sensitive data exposure by 40%</li>
                        <li>✓ Implemented separate PII vs non-PII retention policies for compliance</li>
                        <li>✓ Enabled advanced data versioning and time-travel queries</li>
                        <li>✓ Automated Airflow DAGs for snapshot versioning and tagging</li>
                        <li>✓ Critical backbone for data governance across platform</li>
                      </ul>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <span className="skill-tag text-xs">Apache Kafka</span>
                        <span className="skill-tag text-xs">Apache Flink</span>
                        <span className="skill-tag text-xs">Apache Iceberg</span>
                        <span className="skill-tag text-xs">Spark</span>
                      </div>
                    </div>

                    {/* CI/CD & Testing */}
                    <div className="border-l-2 border-[var(--accent-border)] pl-4">
                      <h4 className="font-bold text-[var(--accent)] mb-2">CI/CD Automation & Comprehensive Testing</h4>
                      <p className="text-[var(--text-secondary)] mb-3">
                        Automated CI/CD pipelines and developed testing frameworks resulting in significant efficiency gains.
                      </p>
                      <ul className="space-y-2 text-[var(--text-secondary)] text-sm">
                        <li>📈 <strong>Flink Automation:</strong> Reduced deployment effort by 40%, onboarding time from 1 week to 1 day with GitHub Actions & Spinnaker</li>
                        <li>🧪 <strong>Integration Framework:</strong> Built unified testing framework for batch & GDPR processors, improved debugging speed by 75%</li>
                        <li>🎨 <strong>Playwright UI Tests:</strong> Automated UI testing, reduced manual testing time by 2 days per release, 85% improvement in successful deployments</li>
                      </ul>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <span className="skill-tag text-xs">GitHub Actions</span>
                        <span className="skill-tag text-xs">Spinnaker</span>
                        <span className="skill-tag text-xs">Playwright</span>
                        <span className="skill-tag text-xs">Spark</span>
                      </div>
                    </div>

                    {/* Production Support */}
                    <div className="border-l-2 border-[var(--accent-border)] pl-4">
                      <h4 className="font-bold text-[var(--accent)] mb-2">Production Excellence & P1 Incident Management</h4>
                      <p className="text-[var(--text-secondary)] mb-3">
                        Handled critical production issues and maintained high reliability standards.
                      </p>
                      <ul className="space-y-2 text-[var(--text-secondary)] text-sm">
                        <li>✓ Managed P1 production issue for consumer dataset availability</li>
                        <li>✓ Coordinated with replicator, NoSQL, and Elasticsearch teams</li>
                        <li>✓ Defined clear MTTD (3–5 hours) and MTTR (12 hours) benchmarks</li>
                        <li>✓ Successfully restored data with zero incidents post-resolution</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-[var(--border)]">
                    <div className="flex flex-wrap gap-2">
                      <span className="skill-tag">Java</span>
                      <span className="skill-tag">Spring Boot</span>
                      <span className="skill-tag">Spring Framework</span>
                      <span className="skill-tag">Apache Kafka</span>
                      <span className="skill-tag">Apache Flink</span>
                      <span className="skill-tag">Apache Iceberg</span>
                      <span className="skill-tag">GCP</span>
                      <span className="skill-tag">REST APIs</span>
                      <span className="skill-tag">Microservices</span>
                      <span className="skill-tag">GitHub Actions</span>
                      <span className="skill-tag">Spinnaker</span>
                      <span className="skill-tag">DataDog</span>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>

              {/* UI & Frontend Support */}
              <AnimateOnScroll delay={300} className="relative pl-16">
                <div className="timeline-dot-muted absolute -left-6 top-2" />

                <div className="card p-8">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">UI & Frontend Leadership</h3>
                      <div className="text-[var(--text-secondary)] font-semibold text-lg mb-1">Supporting Product Development</div>
                      <div className="text-[var(--text-muted)]">Cross-functional collaboration with Design & Frontend teams</div>
                    </div>
                  </div>

                  <div className="space-y-4 mt-6">
                    <div>
                      <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">
                        Served as backend lead for UI support, working closely with product and frontend teams to simplify integration and enhance user experience.
                      </p>
                      <ul className="space-y-2 text-[var(--text-secondary)] text-sm">
                        <li>✓ Redesigned 15+ Java (Spring Boot) APIs to simplify frontend integration patterns</li>
                        <li>✓ Eliminated deployment-service bottleneck through API redesign and workflow optimization</li>
                        <li>✓ Implemented Playwright-based automated UI tests, cutting manual testing time by 2 days per release</li>
                        <li>✓ Increased successful UI feature deployments by 85% through improved API stability</li>
                        <li>✓ Led cross-timezone collaboration with UI and consumer teams for requirement clarification</li>
                        <li>✓ Acted as SME for IDS backend capabilities, documenting flows & integration patterns</li>
                      </ul>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <span className="skill-tag text-xs">Spring Boot</span>
                        <span className="skill-tag text-xs">REST APIs</span>
                        <span className="skill-tag text-xs">Playwright</span>
                        <span className="skill-tag text-xs">UI Automation</span>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* ───── Education Section ────── */}
        <section className="mb-20">
          <AnimateOnScroll>
            <div className="mb-12">
              <div className="section-label mb-4">Education</div>
              <h2 className="text-4xl md:text-5xl font-bold">Academic Background</h2>
            </div>
          </AnimateOnScroll>

          <div className="space-y-6">
            {educationData.map((edu, idx) => (
              <AnimateOnScroll key={idx} delay={idx * 100} className="card p-8">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{edu.degree}</h3>
                    <div className="text-[var(--accent)] font-semibold mb-1">{edu.university}</div>
                    <div className="text-[var(--text-muted)]">Graduated: {edu.year}</div>
                  </div>
                  <div className="mt-4 md:mt-0 text-right">
                    <div className="text-2xl font-bold text-[var(--accent)]">{edu.gpa}</div>
                    <div className="text-sm text-[var(--text-muted)]">GPA</div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-[var(--border)]">
                  <div className="font-semibold mb-3">Key Achievements</div>
                  <ul className="space-y-2 text-[var(--text-secondary)] text-sm">
                    {edu.highlights.map((highlight, hidx) => (
                      <li key={hidx}>🎖️ {highlight}</li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </section>

        {/* ───── Technical Skills Section ────── */}
        <section className="mb-20">
          <AnimateOnScroll>
            <div className="mb-12">
              <div className="section-label mb-4">Skills</div>
              <h2 className="text-4xl md:text-5xl font-bold">Technical Expertise</h2>
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { category: "Languages & Backend", items: ['Java', 'C++', 'Spring Boot', 'REST APIs', 'Microservices'] },
              { category: "Data & Infrastructure", items: ['Apache Kafka', 'Apache Flink', 'Apache Iceberg', 'Elasticsearch', 'MongoDB', 'Scylla', 'Hive'] },
              { category: "DevOps & Cloud", items: ['Docker', 'Kubernetes', 'Git', 'Spinnaker', 'Jenkins', 'GitHub Actions', 'Vault'] },
              { category: "Testing & Monitoring", items: ['Mockito', 'Playwright', 'DataDog', 'Splunk', 'JIRA', 'Confluence'] },
            ].map((skillGroup, idx) => (
              <AnimateOnScroll key={skillGroup.category} delay={idx * 100} className="card p-6">
                <h3 className="font-bold text-[var(--accent)] mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span key={skill} className="skill-tag text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </section>

        {/* ───── Awards & Recognition Section ────── */}
        <section className="mb-20">
          <AnimateOnScroll>
            <div className="mb-12">
              <div className="section-label mb-4">Recognition</div>
              <h2 className="text-4xl md:text-5xl font-bold">Awards & Achievements</h2>
            </div>
          </AnimateOnScroll>

          <div className="space-y-6">
            {[
              { icon: '⭐', title: 'High Five Award', org: 'Expedia Group', desc: 'Recognized for impactful contributions on the IDS project and consistently exceeding team expectations' },
              { icon: '🏆', title: 'Travel Award', org: 'Expedia Group', desc: 'Recognition for outstanding performance and contributions to platform reliability' },
              { icon: '📚', title: 'LPF Scholar', org: 'Academic Excellence 2020', desc: 'Awarded for outstanding academic performance and leadership potential' },
              { icon: '🎯', title: 'Google Kickstart Participant', org: '2022', desc: 'Competitive programming — advanced problem-solving & algorithmic thinking' },
              { icon: '👨‍🏫', title: 'Volunteer Educator', org: 'U&I Trust', desc: 'Teaching and mentoring, empowering disadvantaged communities' },
            ].map((award, idx) => (
              <AnimateOnScroll key={award.title} delay={idx * 100} className="card p-6 flex gap-4">
                <div className="text-3xl">{award.icon}</div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-1">{award.title}</h3>
                  <div className="text-[var(--accent)] font-semibold text-sm mb-1">{award.org}</div>
                  <p className="text-[var(--text-secondary)] text-sm">{award.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </section>

        {/* ───── Download Resume ────── */}
        <section className="text-center pt-16 border-t border-[var(--border)]">
          <AnimateOnScroll>
            <h3 className="text-2xl font-bold mb-6">Ready to see more?</h3>
            <a
              href="/resume.pdf"
              download="Daksha_Talekar_Resume.pdf"
              className="inline-flex items-center px-8 py-4 bg-[var(--accent)] text-black font-semibold rounded-lg hover:bg-emerald-400 transition-all gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Full Resume
            </a>
          </AnimateOnScroll>
        </section>
      </main>

      {/* ───── Footer ────── */}
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
