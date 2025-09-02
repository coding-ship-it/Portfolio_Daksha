export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="flex flex-col items-start justify-center min-h-screen px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto w-full">
          <h1 className="text-8xl md:text-9xl font-black mb-6 tracking-tight">
            <span className="block text-gray-800">DAKSHA</span>
            <span className="block text-gray-800" style={{ marginLeft: '20rem' }}>TALEKAR</span>
          </h1>
          <div className="text-center">
            <p className="text-xl md:text-2xl text-gray-700 mb-8 font-medium">
              SOFTWARE DEVELOPMENT ENGINEER - I
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
              At Expedia, I craft systems that make data flow as effortlessly as travel stories. Outside code, I mentor young minds — because both platforms and people deserve a strong foundation.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-800 text-left">About Me</h2>
          
          <div className="max-w-3xl">
            <div className="space-y-4">
              <p className="text-lg text-gray-600 leading-relaxed">
                Hi, I&apos;m Daksha Talekar — a Software Engineer who enjoys building systems that make data less of a puzzle and more of a story.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                At Expedia Group, I work on the Integrated Data Stores (IDS) platform — the backbone for some of Expedia&apos;s most important data. IDS acts as a single source of truth for entities like Travelers, Supply, Places, and Trips, making data trustworthy, discoverable, and easy to use. Through Java, Spring Boot, and REST APIs, I help ensure that everything from personalization to analytics runs on clean, reliable, and scalable foundations.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Earlier, during my internship at VOIS (Vodafone Intelligent Solutions), I helped build a platform to consolidate blood bank data across a city — connecting hospitals and enabling quicker access to life-saving resources. That experience grounded me in how technology can directly impact people&apos;s lives.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Outside of work, I volunteer with U&I Trust, a charity that empowers disadvantaged children and individuals across India. Teaching and mentoring here isn&apos;t just about academics — it&apos;s about building stronger communities, taking ownership, and leading with purpose. What inspires me most is knowing that even small efforts can create impact that truly matters.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                For me, software engineering — and volunteering — share the same essence: it&apos;s all about solving problems, creating opportunities, and making a lasting difference.
              </p>
            </div>
            
            {/* Read More and Let's Connect */}
            <div className="mt-12 flex justify-between items-end">
              <a 
                href="/experience"
                className="inline-flex items-center text-gray-600 hover:text-gray-800 transition-colors group"
              >
                <span className="text-lg font-medium">Read more</span>
                <svg 
                  className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              
              <div className="flex items-center space-x-4">
                <span className="text-lg font-medium text-gray-600">Let&apos;s connect:</span>
                <a 
                  href="mailto:dakshatalekar123@gmail.com"
                  className="inline-flex items-center text-gray-600 hover:text-gray-800 transition-colors group"
                >
                  <svg 
                    className="w-5 h-5 group-hover:scale-110 transition-transform" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h1.416L12 11.73l8.948-7.909h1.416c.904 0 1.636.732 1.636 1.636z"/>
                  </svg>
                </a>
                <a 
                  href="https://linkedin.com/in/daksha-talekar-a0a4b7211"
                  target="_blank"
                  className="inline-flex items-center text-gray-600 hover:text-gray-800 transition-colors group"
                >
                  <svg 
                    className="w-5 h-5 group-hover:scale-110 transition-transform" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Resume Download */}
            <div className="mt-8 text-center">
              <a 
                href="/resume.pdf"
                download="Daksha_Talekar_Resume.pdf"
                className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors group"
              >
                <svg 
                  className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Recommendations Section */}
      <section id="recommendations" className="py-20 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-800 text-left">Recommendations</h2>
          
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 shadow-md border border-gray-200">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold text-lg">UA</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Utkarshini Acharya</h3>
                  <p className="text-gray-600">SDE II at Expedia Group</p>
                  <p className="text-sm text-gray-500">August 29, 2025 • Utkarshini was senior to Daksha but didn&apos;t manage Daksha directly</p>
                </div>
              </div>
              <blockquote className="text-gray-700 leading-relaxed italic">
                &ldquo;I had the pleasure of working closely with Daksha on several key initiatives, and throughout our time collaborating, I was consistently impressed by her professionalism, technical growth, and ability to take ownership of complex tasks.
                <br/><br/>
                In the context of fast-paced and high-impact projects, she demonstrated strong initiative and made meaningful contributions to important product features. Her consistency and alignment with our team&apos;s standards and workflows made her a reliable and valuable team member. It was especially rewarding to see how quickly she absorbed feedback and applied it, a clear sign of her curiosity and eagerness to learn.
                <br/><br/>
                Working together on feature development and process alignment, I saw firsthand how she navigated challenges with maturity and a solutions-oriented mindset. Her progress over time has been remarkable, both in terms of technical capability and confidence in execution.
                <br/><br/>
                Beyond her technical strengths, she brought excellent interpersonal skills to the team, clear communication, collaboration, and a thoughtful approach to cross-functional work. She has grown immensely and will no doubt continue to thrive and contribute meaningfully wherever she goes.&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-800 text-left">Projects</h2>
          
          <div className="bg-white rounded-xl p-12 shadow-md border border-gray-200">
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              Continuously working on new projects involving distributed systems, data engineering,
              and backend architecture. Check out my GitHub for the latest updates!
            </p>
            <a 
              href="https://github.com/coding-ship-it" 
              target="_blank" 
              className="inline-flex items-center text-gray-800 font-medium hover:text-gray-600 transition-colors text-lg"
            >
              View on GitHub 
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="py-20 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-800 text-left">Awards & Achievements</h2>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mr-6 shadow-md">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">High Five Awardee & Travel Award</h3>
                  <p className="text-lg text-gray-600 font-semibold mb-2">Expedia Group</p>
                  <p className="text-gray-600 leading-relaxed">
                    Recognized for exceptional performance and contribution to the team with outstanding project delivery and innovative solutions that directly impacted platform reliability.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mr-6 shadow-md">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6L23 9l-11-6zM6.5 12.5v4.5L12 19.4l5.5-2.4v-4.5L12 15l-5.5-2.5z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Volunteer Teacher</h3>
                  <p className="text-lg text-gray-600 font-semibold mb-2">U & I Organization</p>
                  <p className="text-gray-600 leading-relaxed">
                    Teaching English to students in grades 7–9, contributing to community development through education and empowering the next generation with essential communication skills.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mr-6 shadow-md">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">LPF Scholar (2020)</h3>
                  <p className="text-lg text-gray-600 font-semibold mb-2">Academic Excellence</p>
                  <p className="text-gray-600 leading-relaxed">
                    Awarded prestigious scholarship for outstanding academic performance and demonstrated leadership potential in engineering studies.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mr-6 shadow-md">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Google Kickstart Participant (2022)</h3>
                  <p className="text-lg text-gray-600 font-semibold mb-2">Competitive Programming</p>
                  <p className="text-gray-600 leading-relaxed">
                    Participated in Google&apos;s prestigious competitive programming competition, demonstrating advanced problem-solving skills and algorithmic thinking.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-800 text-left">Let&apos;s get in touch!</h2>
          
          <div className="mb-16">
            <p className="text-xl text-gray-600 max-w-2xl leading-relaxed text-left">
              If you have a cool project idea or just want to connect / collaborate, feel free
              to reach out to me on any of the platforms mentioned below.
            </p>
          </div>

          <div className="flex justify-between items-center mb-16">
            <div className="text-left">
              <div className="mb-4">
                <a 
                  href="mailto:dakshatalekar123@gmail.com" 
                  className="text-2xl md:text-3xl font-medium text-gray-800 hover:text-gray-600 transition-colors"
                >
                  dakshatalekar123@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex space-x-6">
              <a
                href="https://linkedin.com/in/daksha-talekar-a0a4b7211"
                target="_blank"
                className="text-gray-600 hover:text-gray-800 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              
              <a
                href="https://github.com/coding-ship-it"
                target="_blank"
                className="text-gray-600 hover:text-gray-800 transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.30 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>

              <a
                href="https://peerlist.io/dakshata123"
                target="_blank"
                className="text-gray-600 hover:text-gray-800 transition-colors"
                aria-label="Peerlist"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </a>

              <a
                href="https://vercel.com/coding-ship-it"
                target="_blank"
                className="text-gray-600 hover:text-gray-800 transition-colors"
                aria-label="Vercel"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 22.525H0l12-21.05 12 21.05z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-500 mb-4">© 2025 Daksha Talekar. All rights reserved.</p>
            <div className="flex justify-center space-x-4 text-sm text-gray-400">
              <a href="#home" className="hover:text-gray-600 transition-colors">Home</a>
              <a href="#about" className="hover:text-gray-600 transition-colors">About</a>
              <a href="#recommendations" className="hover:text-gray-600 transition-colors">Recommendations</a>
              <a href="#projects" className="hover:text-gray-600 transition-colors">Projects</a>
              <a href="#awards" className="hover:text-gray-600 transition-colors">Awards</a>
              <a href="#contact" className="hover:text-gray-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
