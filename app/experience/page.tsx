import Link from 'next/link';
import Image from 'next/image';

export default function Experience() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-3 text-2xl font-bold text-gray-800 hover:text-gray-600 transition-colors">
              <Image 
                src="/coding.jpeg" 
                alt="Coding" 
                width={40}
                height={40}
                className="rounded-full object-cover opacity-80 mix-blend-multiply"
              />
              <span>Daksha Talekar</span>
            </Link>
            <Link 
              href="/" 
              className="inline-flex items-center text-gray-600 hover:text-gray-800 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* About Me Section */}
        <section className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-gray-800">About Me</h1>
          
          <div className="max-w-3xl">
            <div className="space-y-4">
              <p className="text-lg text-gray-600 leading-relaxed">
                Hi, I'm Daksha Talekar — a Software Engineer who enjoys building systems that make data less of a puzzle and more of a story.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                At Expedia Group, I work on the Integrated Data Stores (IDS) platform — the backbone for some of Expedia's most important data. IDS acts as a single source of truth for entities like Travelers, Supply, Places, and Trips, making data trustworthy, discoverable, and easy to use. Through Java, Spring Boot, and REST APIs, I help ensure that everything from personalization to analytics runs on clean, reliable, and scalable foundations.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Earlier, during my internship at VOIS (Vodafone Intelligent Solutions), I helped build a platform to consolidate blood bank data across a city — connecting hospitals and enabling quicker access to life-saving resources. That experience grounded me in how technology can directly impact people's lives.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Outside of work, I volunteer with U&I Trust, a charity that empowers disadvantaged children and individuals across India. Teaching and mentoring here isn't just about academics — it's about building stronger communities, taking ownership, and leading with purpose. What inspires me most is knowing that even small efforts can create impact that truly matters.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                For me, software engineering — and volunteering — share the same essence: it's all about solving problems, creating opportunities, and making a lasting difference.
              </p>
            </div>
          </div>
        </section>

        {/* Professional Experience Section */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">Worked at</h2>

          {/* Experience Tree Structure */}
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-300"></div>
            
            <div className="space-y-16">
              {/* Expedia Group */}
              <div className="relative">
                <div className="flex items-start">
                  {/* Company Logo/Icon */}
                  <div className="relative z-10 flex-shrink-0 w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-6">
                    <div className="w-8 h-8 bg-gray-600 rounded flex items-center justify-center">
                      <span className="text-white font-bold text-sm">E</span>
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="pb-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">Software development engineer I</h3>
                      <div className="text-gray-700 font-medium mb-2">Expedia Group</div>
                      <div className="text-gray-500 text-sm mb-4">Sep 2023 - Present (2 yr, &lt; 1 m) • Bengaluru, Karnataka, India</div>
                      
                      <div className="text-gray-600 mb-4">
                        <div className="font-medium text-gray-700 mb-2">Team: Data Store SDK</div>
                      </div>
                      
                      <div className="space-y-4 text-gray-600 leading-relaxed">
                        <div>
                          <div className="font-medium text-gray-700 mb-2">Data Platform:</div>
                          <p className="text-sm">
                            Currently working on self served data platform, that could help teams move and explore their data in an elegant way by allowing dataset owners to onboard datasets, which can then be accessed via unified APIs by consumers for personalisation.
                          </p>
                        </div>

                        <div>
                          <div className="font-medium text-gray-700 mb-2">Merlon - Relation Based Fine Grained Authorization System (inspired by Google Zanzibar):</div>
                          <p className="text-sm">
                            Designed and implemented a Zanzibar inspired relation based authorization model for scalable ACL(Access Management List) management. Built fine-grained control at both dataset and attribute levels, ensuring sensitive fields(e.g., email, username) are protected even within non-sensitive datasets. Introduced producer-driven onboarding workflows where data owners define authorized clients, mark sensitive attributes, and dynamically update access policies. Enforced token subject–based authorization (beyond raw client IDs), ensuring strict identity correctness and preventing privilege leaks across versions.
                          </p>
                        </div>

                        <div>
                          <div className="font-medium text-gray-700 mb-2">DataSync – Real-Time Data Synchronisation Pipeline:</div>
                          <p className="text-sm">
                            Built a CDC-based ingestion pipeline using Kafka, Flink, and Apache Iceberg to synchronize datasets across multiple datastores. Implemented snapshotting, rollback, and time-travel queries in Iceberg, with separate retention policies for PII vs non-PII data to enforce compliance. Automated daily DAG Airflows for recording snapshot versions, tagging, and long-term analytical data retention.
                          </p>
                        </div>

                        <div>
                          <div className="font-medium text-gray-700 mb-2">Flink Applications & CI/CD Automation:</div>
                          <p className="text-sm">
                            Developed Flink applications using Dataproc Flink Starter template, eliminating duplicate code by reusing artifacts from the main Flink-demo app. Automated deployment pipelines with Spinnaker, GitHub Actions, and Docker, integrated vault secrets and S3 storage.
                          </p>
                        </div>

                        <div>
                          <div className="font-medium text-gray-700 mb-2">Iceberg Table Management:</div>
                          <p className="text-sm">
                            Created Hive & Iceberg tables via Schema Deploy, defining schemas in Git-managed HQL files and promoting them through deployment pipelines.
                          </p>
                        </div>

                        <div>
                          <div className="font-medium text-gray-700 mb-2">Code Coverage:</div>
                          <p className="text-sm">
                            Wrote rigorous unit test and integration tests for services within platform, increasing the method coverage by over 40 percent.
                          </p>
                        </div>

                        <div>
                          <div className="font-medium text-gray-700 mb-2">Backend & UI Support:</div>
                          <p className="text-sm">
                            Backend lead for UI support; enhanced Java (Spring Boot) APIs to simplify frontend workflows. Served as liaison between backend and external frontend teams.
                          </p>
                        </div>

                        <div>
                          <div className="font-medium text-gray-700 mb-2">Microservices:</div>
                          <p className="text-sm">
                            Implemented several backend endpoints in Spring Boot. Worked on the re-platform and code base migration to optimize costs and serviceability.
                          </p>
                        </div>
                        
                        <div>
                          <div className="font-medium text-gray-700 mb-2">Frameworks/Tools:</div>
                          <div className="flex flex-wrap gap-1">
                            <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">Java</span>
                            <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">Core Java</span>
                            <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">Spring Framework</span>
                            <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">Spring Boot</span>
                            <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">Apache Kafka</span>
                            <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">Apache Flink</span>
                            <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">Apache Iceberg</span>
                            <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">Microservices</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* VOIS Internship */}
              <div className="relative">
                <div className="flex items-start">
                  {/* Company Logo/Icon */}
                  <div className="relative z-10 flex-shrink-0 w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-6">
                    <div className="w-8 h-8 bg-gray-600 rounded flex items-center justify-center">
                      <span className="text-white font-bold text-sm">V</span>
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="pb-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">Summer Intern</h3>
                      <div className="text-gray-700 font-medium mb-2">VOIS</div>
                      <div className="text-gray-500 text-sm mb-4">Jun 2022 - Sep 2022 (3 m) • Pune, Maharashtra, India</div>
                      
                      <div className="space-y-3 text-gray-600 leading-relaxed">
                        <div>
                          <div className="font-medium text-gray-700 mb-2">Blood Bank Data Management Website:</div>
                          <p className="text-sm">
                            Developed a website to collect and manage blood bank data, exposing it to consumers via a user-friendly interface for quick access and transparency.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Download Resume Section */}
          <div className="mt-12 text-left">
            <a 
              href="/resume.pdf"
              download="Daksha_Talekar_Resume.pdf"
              className="inline-flex items-center px-8 py-4 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors group text-lg"
            >
              <svg 
                className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gray-300 mb-4">© 2025 Daksha Talekar. All rights reserved.</p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://linkedin.com/in/daksha-talekar-a0a4b7211"
              target="_blank"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            
            <a
              href="https://github.com/coding-ship-it"
              target="_blank"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.30 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>

            <a
              href="https://peerlist.io/dakshata123"
              target="_blank"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Peerlist"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </a>

            <a
              href="https://vercel.com/coding-ship-it"
              target="_blank"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Vercel"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 22.525H0l12-21.05 12 21.05z"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
