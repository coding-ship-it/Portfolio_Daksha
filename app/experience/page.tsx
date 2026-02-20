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
    degree: "Bachelor of Engineering in Information Technology",
    university: "Pune Institute of Computer Technology (PICT)",
    year: "2019 - 2023",
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
                Hi, I'm Daksha Talekar — a Software Engineer building scalable data systems at Expedia Group. I specialize in designing secure, observable, and maintainable infrastructure that enables thousands of engineers to leverage data confidently.
              </p>

              <p>
                At Expedia, I work on the Integrated Data Stores (IDS) platform, the backbone for some of the company's most critical data infrastructure. My focus spans authorization patterns (inspired by Google Zanzibar), real-time data synchronization pipelines, and system reliability. I'm committed to writing rigorous tests, documenting systems deeply, and collaborating across teams to solve problems that matter.
              </p>

              <p>
                Before joining Expedia, I interned at VOIS (Vodafone Intelligent Solutions), where I built a blood bank data consolidation platform that connected 50+ hospitals and improved emergency response times. That summer taught me that good engineering solves real human problems — a principle that drives me every day.
              </p>

              <p>
                Outside of work, I volunteer with U&I Trust, a non-profit empowering disadvantaged communities across India. I teach English to students in grades 7–9, mentor aspiring engineers, and help build the next generation of problem-solvers. For me, mentorship and software engineering aren't separate — both are about creating opportunities, building confidence, and making lasting impact.
              </p>

              <p>
                I'm passionate about systems thinking, data governance, competitive programming, and continuous learning. When I'm not coding, you'll find me reading about distributed systems, exploring new technologies, or brainstorming with friends on potential projects.
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
                    {/* Merlon Project */}
                    <div className="border-l-2 border-[var(--accent-border)] pl-4">
                      <h4 className="font-bold text-[var(--accent)] mb-2">Merlon — Fine-Grained Authorization System</h4>
                      <p className="text-[var(--text-secondary)] mb-3">
                        Designed and implemented a Zanzibar-inspired relation-based authorization model for scalable ACL management across 100+ teams.
                      </p>
                      <ul className="space-y-2 text-[var(--text-secondary)] text-sm">
                        <li>✓ Fine-grained control at both dataset and attribute levels (e.g., email as PII)</li>
                        <li>✓ Producer-driven onboarding workflows where data owners define authorized clients</li>
                        <li>✓ Token subject-based authorization preventing privilege leaks across versions</li>
                        <li>✓ Dynamic policy updates enabling real-time access revocation</li>
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
                      <h4 className="font-bold text-[var(--accent)] mb-2">DataSync — Real-Time Data Synchronization Pipeline</h4>
                      <p className="text-[var(--text-secondary)] mb-3">
                        Built a CDC-based ingestion pipeline using Kafka, Flink, and Apache Iceberg to synchronize datasets across multiple datastores.
                      </p>
                      <ul className="space-y-2 text-[var(--text-secondary)] text-sm">
                        <li>✓ Change Data Capture (CDC) ingestion with snapshotting and rollback capabilities</li>
                        <li>✓ Time-travel queries in Iceberg for historical data analysis</li>
                        <li>✓ Separate retention policies for PII vs non-PII data (compliance-first)</li>
                        <li>✓ Automated daily Airflow DAGs for snapshot versioning and tagging</li>
                      </ul>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <span className="skill-tag text-xs">Apache Kafka</span>
                        <span className="skill-tag text-xs">Apache Flink</span>
                        <span className="skill-tag text-xs">Apache Iceberg</span>
                        <span className="skill-tag text-xs">Airflow</span>
                      </div>
                    </div>

                    {/* Other Contributions */}
                    <div className="border-l-2 border-[var(--accent-border)] pl-4">
                      <h4 className="font-bold text-[var(--accent)] mb-2">Additional Contributions</h4>
                      <ul className="space-y-2 text-[var(--text-secondary)] text-sm">
                        <li>📈 <strong>Code Coverage:</strong> Increased method coverage by 40% through rigorous unit & integration testing</li>
                        <li>🔧 <strong>Flink Applications:</strong> Developed Flink apps using Dataproc, automated deployment with Spinnaker, GitHub Actions</li>
                        <li>🗂️ <strong>Iceberg Tables:</strong> Created Hive & Iceberg tables via Schema Deploy with Git-managed HQL</li>
                        <li>🎨 <strong>Backend & UI Lead:</strong> Enhanced Java (Spring Boot) APIs, served as liaison between backend and frontend teams</li>
                        <li>🏗️ <strong>Microservices:</strong> Implemented Spring Boot endpoints, led code base migration for cost optimization</li>
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
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>

              {/* VOIS Internship */}
              <AnimateOnScroll delay={200} className="relative pl-16">
                <div className="timeline-dot-muted absolute -left-6 top-2" />

                <div className="card p-8">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-3xl font-bold mb-2">Summer Intern</h3>
                      <div className="text-[var(--text-secondary)] font-semibold text-lg mb-1">VOIS (Vodafone Intelligent Solutions)</div>
                      <div className="text-[var(--text-muted)]">Pune, India</div>
                    </div>
                    <div className="text-right mt-4 md:mt-0">
                      <div className="text-sm font-mono text-[var(--text-muted)] bg-[var(--bg-primary)] px-3 py-1 rounded inline-block">
                        Jun – Sep 2022 (3 months)
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 mt-6">
                    <div>
                      <h4 className="font-bold text-[var(--accent)] mb-2">Blood Bank Data Consolidation Platform</h4>
                      <p className="text-[var(--text-secondary)] mb-4">
                        Developed a web platform consolidating blood bank data across a city, connecting hospitals and enabling rapid access to life-saving resources.
                      </p>
                      <ul className="space-y-2 text-[var(--text-secondary)] text-sm">
                        <li>✓ Real-time blood inventory tracking across 50+ hospital networks</li>
                        <li>✓ User-friendly search interface for quick resource discovery</li>
                        <li>✓ Automated emergency alert system for critical shortages</li>
                        <li>✓ Improved emergency response time by 40%</li>
                      </ul>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <span className="skill-tag text-xs">Full Stack</span>
                        <span className="skill-tag text-xs">PostgreSQL</span>
                        <span className="skill-tag text-xs">REST APIs</span>
                        <span className="skill-tag text-xs">Frontend</span>
                      </div>
                    </div>

                    <p className="text-[var(--text-secondary)] italic pt-2 border-t border-[var(--border)]">
                      "This internship reinforced my belief that engineering solves real human problems. The impact of tech on people's lives became crystal clear."
                    </p>
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
              { category: "Languages", items: ['Java', 'TypeScript', 'Python', 'SQL', 'JavaScript'] },
              { category: "Frameworks & Libraries", items: ['Spring Boot', 'Spring Framework', 'Next.js', 'React', 'REST APIs'] },
              { category: "Data & Stream Processing", items: ['Apache Kafka', 'Apache Flink', 'Apache Iceberg', 'BigQuery', 'Hive'] },
              { category: "DevOps & Tools", items: ['Docker', 'Kubernetes', 'GCP', 'Spinnaker', 'GitHub Actions', 'Airflow', 'Vault'] },
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
              { icon: '⭐', title: 'High Five Awardee', org: 'Expedia Group', desc: 'Recognized for exceptional performance and contributions to platform reliability' },
              { icon: '🏆', title: 'Travel Award', org: 'Expedia Group', desc: 'Outstanding contribution to data store platform and team impact' },
              { icon: '📚', title: 'LPF Scholar', org: 'Academic Excellence 2020', desc: 'Awarded for outstanding academic performance and leadership potential' },
              { icon: '🎯', title: 'Google Kickstart Participant', org: '2022', desc: 'Competitive programming — advanced problem-solving & algorithmic thinking' },
              { icon: '👨‍🏫', title: 'Volunteer Educator', org: 'U&I Trust', desc: 'Teaching English to grades 7–9, empowering disadvantaged communities' },
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
