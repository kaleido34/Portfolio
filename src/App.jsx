import { useState } from 'react';

function App() {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Logistic Regression Model",
      description: "Python, NumPy, Pandas, Matplotlib, scikit-learn baseline",
      image: "/project1.png",
      liveUrl: "https://huggingface.co/spaces/Prashant5504/Logistic-Regression",
      details: "Custom logistic regression model with advanced preprocessing and visualization."
    },
    {
      id: 2,
      title: "Noise2Nectar",
      description: "Next.js, React, TypeScript, Tailwind, Prisma, Zustand, Supabase, Tesseract.js, Google AI SDK",
      image: "/project2.png",
      liveUrl: "https://n2-n-p6bd.vercel.app",
      details: "A comprehensive AI-powered platform that converts audio noise into structured data insights."
    },
    {
      id: 3,
      title: "FitMate",
      description: "React, JavaScript, JWT, Node.js, Express, MongoDB, NPM, REST API",
      image: "/project3.png",
      liveUrl: "https://fitmate-frontend-kappa.vercel.app/",
      details: "Full-stack fitness application with authentication and progress tracking."
    },
    {
      id: 4,
      title: "NewsBoard",
      description: "HTML5, CSS3, JavaScript, Vanilla-Js, News Api",
      image: "/project4.png",
      liveUrl: "https://news-board-gilt.vercel.app",
      details: "News website with a clean and modern design using GNews Api."
    },
    {
      id: 5,
      title: "WordNest",
      description: "Express, Node, Mongo Db, Rest Api, Ejs ",
      image: "/project5.png",
      liveUrl: "https://word-nest-rose.vercel.app",
      details: "A React-based vocabulary app with Node.js backend and MongoDB database support."
    },
    {
      id: 6,
      title: "LandForm",
      description: "Html, Css, JavaScript",
      image: "/project6.png",
      liveUrl: "https://landform-gold.vercel.app/",
      details: "Checkout this cool modern landing page made using HTML, Css and a little bit of Javascript."
    }
  ];

  const skills = {
    core: "C++, JavaScript, TypeScript, Python, HTML, CSS, Git & GitHub",
    web: "Next.js, Express, REST APIs, JWT, GraphQL, WebSockets, PostgreSQL, Prisma, Fastify, Next.js, React, API Security",
    devops: "Docker, CI/CD (GitHub Actions), Nginx, Vercel, TensorFlow, scikit-learn, Pandas, NumPy"
  };

  const techLogos = [
    { name: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
    { name: 'Next.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg', extraClass: 'logo-white-bg' },
    { name: 'Node.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
    { name: 'TypeScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
    { name: 'JavaScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
    { name: 'Python', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
    { name: 'Docker', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
    { name: 'PostgreSQL', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
    { name: 'MongoDB', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
    { name: 'Git', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
    { name: 'TailwindCSS', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
  ];

  const handleDownloadResume = () => {
    const resumeUrl = '/resume.pdf'; // place your resume in /public/resume.pdf
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Prashant_Sharma_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const handleContactScroll = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const visibleProjects = showAllProjects ? projects : projects.slice(0, 3);

  return (
    <div className="min-h-screen bg-black text-primary">
      {/* Hero */}
      <section className="hero-section">
        <div className="container-custom">
          <div className="hero-wrapper">
            <div className="hero-content">
              <p className="hero-hi">Hi I am</p>
              <h1 className="hero-title text-[64px] sm:text-[80px] md:text-[96px] leading-none">
                Prashant<br /><span className="block align-under-pras">Sharma</span>
              </h1>
              <p className="hero-role text-[22px] align-under-sharma">Full-stack developer</p>
              <div className="hero-buttons">
                <button onClick={handleDownloadResume} className="btn btn-primary min-w-[200px]">
                  Resume
                </button>
                <button onClick={handleContactScroll} className="btn btn-secondary min-w-[220px]">
                  Contact Me
                </button>
              </div>
            </div>

            <div className="hero-circle">
              <div className="profile-frame">
                <img 
                  src="/profile.jpeg" 
                  alt="Prashant Sharma"
                  className="profile-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
{/* About */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-left">
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-lg leading-relaxed opacity-90">
              I'm passionate about full-scale system design, where I get to explore complex architectures and
              engineer them into practical solutions. What drives me is the curiosity to understand how things
              work and the challenge of building systems that are not just functional, but scalable, secure, and
              reliable at scale.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-2">My Projects</h2>
          <p className="text-center text-blue mb-10">A showcase of my web development journey, featuring full-stack applications and landing pages.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {visibleProjects.map((project) => (
              <div
                key={project.id}
                className="rounded-xl overflow-hidden bg-neutral-900/60 transform transition-transform duration-300 hover:-translate-y-3 hover:shadow-[0_20px_45px_rgba(172,147,250,0.25)]"
              >
                <div className="h-44 relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-blue text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-neutral-300 text-sm mb-3">{project.description}</p>
                  <p className="text-neutral-400 text-xs mb-4">{project.details}</p>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple underline-offset-4 hover:underline"
                  >
                    View Live Project →
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            
            {showAllProjects ? (
              <button
                onClick={() => setShowAllProjects(false)}
                className="btn btn-primary "
              >
                Show Less
              </button>
            ) : (
              <button
                onClick={() => setShowAllProjects(true)}
                className="btn btn-primary"
              >
                Check All
              </button>
            )}
            {showAllProjects && (
              <p className="mt-4 text-neutral-300">
                Check more cool projects <a href="https://github.com/kaleido34" target="_blank" rel="noopener noreferrer" className="text-purple underline-offset-4 hover:underline">here</a>.
              </p>
            )}
          </div>
          
        </div>
      </section>

      {/* Skills */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-2">Skills</h2>
          <p className="text-center text-blue mb-10">A focused tactile index of my Stack</p>

          {/* Tech logos row */}
          <div className="skills-logos">
            {techLogos.map((t) => (
              <img
                key={t.name}
                src={t.src}
                alt={t.name}
                title={t.name}
                className={`skill-logo ${t.extraClass || ''}`}
              />
            ))}
          </div>

          <div className="max-w-4xl mx-auto grid gap-8 mt-10">
            <div>
              <h3 className="text-purple text-lg font-semibold mb-2">Core:</h3>
              <p className="text-neutral-300">{skills.core}</p>
            </div>
            <div>
              <h3 className="text-purple text-lg font-semibold mb-2">Web Technologies:</h3>
              <p className="text-neutral-300">{skills.web}</p>
            </div>
            <div>
              <h3 className="text-purple text-lg font-semibold mb-2">DevOps/ML:</h3>
              <p className="text-neutral-300">{skills.devops}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact (last section) */}
      <section id="contact" className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-8">Lets Create Together</h2>

          <div className="text-center mb-10">
            <p className="text-lg mb-2">Got a Random Project or an MVP ?? Any feedback, queries or just</p>
            <p className="text-lg mb-4">absolutely anything!!</p>
            <p className="text-sm text-neutral-400">Feel free to message. ⚡⚡⚡</p>
          </div>

          {/* Unified social icons */}
          <div className="flex justify-center items-center gap-8">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/prashant-sharma-1174a9230/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              title="LinkedIn"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V24h-4V8.5zM8.5 8.5h3.8v2.1h.1c.5-.9 1.8-2.1 3.8-2.1 4.1 0 4.9 2.7 4.9 6.2V24h-4v-6.9c0-1.6 0-3.7-2.3-3.7-2.3 0-2.7 1.8-2.7 3.6V24h-4V8.5z"/>
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/kaleido34"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              title="GitHub"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M12 .5C5.73.5.77 5.46.77 11.73c0 4.9 3.18 9.06 7.6 10.53.56.1.77-.25.77-.56v-2c-3.09.67-3.74-1.33-3.74-1.33-.51-1.28-1.25-1.62-1.25-1.62-1-.68.08-.67.08-.67 1.11.08 1.7 1.14 1.7 1.14 1 1.7 2.7 1.2 3.34.92.1-.72.39-1.2.71-1.48-2.49-.28-5.12-1.24-5.12-5.51 0-1.22.44-2.22 1.15-3-.11-.28-.5-1.41.11-2.93 0 0 .94-.3 3.07 1.17.9-.25 1.86-.38 2.82-.38.96 0 1.92.13 2.82.38 2.13-1.47 3.07-1.17 3.07-1.17.61 1.52.22 2.65.11 2.93.71.78 1.15 1.78 1.15 3 0 4.29-2.64 5.22-5.15 5.49.4.34.78 1.03.78 2.09v3.3c0 .3.18.64.76.53 4.45-1.48 7.6-5.64 7.6-10.53C23.23 5.46 18.27.5 12 .5z"/>
              </svg>
            </a>

            {/* Gmail */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=PrashantSharma5504@gmail.com&su=Hello%20Prashant&body=Hi%20there!"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              title="Gmail"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M22.5 5.5v13c0 .83-.67 1.5-1.5 1.5H17V11.1l-5 3.75-5-3.75V20H3c-.83 0-1.5-.67-1.5-1.5v-13c0-1.85 2.12-2.9 3.6-1.8L7 6.5l5 3.75 5-3.75 1.9-1.42c1.49-1.1 3.6-.06 3.6 1.92z"/>
              </svg>
            </a>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-neutral-400">PrashantSharma5504@gmail.com</p>
            <p className="text-xs text-neutral-500 mt-4">© 2025 PrashantSharma. All rights reserved.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;