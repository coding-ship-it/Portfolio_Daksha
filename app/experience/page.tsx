export default function Experience() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="/" className="text-2xl font-bold text-gray-800">
              Daksha Talekar
            </a>
            <a 
              href="/" 
              className="inline-flex items-center text-gray-600 hover:text-gray-800 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* About Me Section */}
        <section className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-gray-800">About Me</h1>
          
          <div className="bg-white rounded-xl p-8 shadow-md border border-gray-200 mb-8">
            <div className="space-y-6">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">Professional Experience</h2>

          {/* Experience Tree Structure */}
          <div className="space-y-8">
            {/* Expedia Group */}
            <div className="bg-white rounded-xl p-8 shadow-md border border-gray-200">
              <div className="flex items-start mb-6">
                <div className="w-4 h-4 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Software Development Engineer I</h3>
                  <div className="flex items-center mb-4">
                    <span className="text-xl font-semibold text-blue-600 mr-4">Expedia Group</span>
                    <span className="text-gray-500">September 2023 – Present</span>
                  </div>
                  
                  <div className="ml-6 border-l-2 border-gray-200 pl-6">
                    <h4 className="text-lg font-semibold text-gray-700 mb-3">Key Responsibilities & Achievements:</h4>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Built real-time data pipelines and managed Iceberg tables for the Integrated Data Stores (IDS) platform</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Developed and maintained REST APIs using Java and Spring Boot for critical data services</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Implemented fine-grained authorization systems and real-time synchronization platforms</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Ensured platform reliability and scalability for high-traffic travel applications</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Collaborated on cross-functional teams to deliver critical features and improvements</span>
                      </li>
                    </ul>
                    
                    <div className="mt-4">
                      <h5 className="font-semibold text-gray-700 mb-2">Technologies:</h5>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Java</span>
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Spring Boot</span>
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">REST APIs</span>
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Apache Iceberg</span>
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Data Pipelines</span>
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Microservices</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* VOIS Internship */}
            <div className="bg-white rounded-xl p-8 shadow-md border border-gray-200">
              <div className="flex items-start mb-6">
                <div className="w-4 h-4 bg-green-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Software Engineering Intern</h3>
                  <div className="flex items-center mb-4">
                    <span className="text-xl font-semibold text-green-600 mr-4">VOIS (Vodafone Intelligent Solutions)</span>
                    <span className="text-gray-500">Summer 2022</span>
                  </div>
                  
                  <div className="ml-6 border-l-2 border-gray-200 pl-6">
                    <h4 className="text-lg font-semibold text-gray-700 mb-3">Project & Contributions:</h4>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Built a platform to consolidate blood bank data across the city</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Connected hospitals and enabled quicker access to life-saving resources</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Developed full-stack solutions for healthcare data management</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Gained experience in how technology can directly impact people's lives</span>
                      </li>
                    </ul>
                    
                    <div className="mt-4">
                      <h5 className="font-semibold text-gray-700 mb-2">Technologies:</h5>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Full-Stack Development</span>
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Database Management</span>
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Healthcare Systems</span>
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Data Integration</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Volunteer Experience */}
            <div className="bg-white rounded-xl p-8 shadow-md border border-gray-200">
              <div className="flex items-start mb-6">
                <div className="w-4 h-4 bg-purple-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Volunteer Teacher</h3>
                  <div className="flex items-center mb-4">
                    <span className="text-xl font-semibold text-purple-600 mr-4">U&I Trust</span>
                    <span className="text-gray-500">2021 – Present</span>
                  </div>
                  
                  <div className="ml-6 border-l-2 border-gray-200 pl-6">
                    <h4 className="text-lg font-semibold text-gray-700 mb-3">Impact & Activities:</h4>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Teaching English to students in grades 7–9</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Contributing to community development through education</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Empowering disadvantaged children and individuals across India</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Building stronger communities through mentorship and leadership</span>
                      </li>
                    </ul>
                    
                    <div className="mt-4">
                      <h5 className="font-semibold text-gray-700 mb-2">Skills Developed:</h5>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Teaching</span>
                        <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Mentorship</span>
                        <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Leadership</span>
                        <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Community Building</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Download Resume Section */}
          <div className="mt-12 text-center">
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
              Download Full Resume
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
          </div>
        </div>
      </footer>
    </div>
  );
}
