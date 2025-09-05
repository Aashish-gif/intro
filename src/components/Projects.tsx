import React, { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
  {
  id: 1,
  title: "Worknix",
  description:
    "AI-powered algorithmic trading system with real-time market analysis and advanced risk management protocols",
  image:
    "https://www.betterup.com/hubfs/Marketing-manager-presenting-charts-on-screen-at-team-meeting-best-jobs-with-business-degree.jpg#keepProtocol",
  tags: ["MERN Stack", "Fintech"],
  tech: ["React.js", "Node.js", "MongoDB", "JWT", "Figma"],
  github: "https://github.com/codinggita/worknix",
  live: "https://worknix-the-all-in-one-corporate-os.netlify.app/",
  video: "https://www.youtube.com/watch?v=gZLKio8cW0g&feature=youtu.be",
},
    {
    id: 2,
    title: "Cricket Score App",
    description:
      "Developed a responsive web application to provide real-time cricket score updates, solving the common issue of quick score accessibility. Designed an intuitive frontend using React.js and integrated live cricket score APIs for real-time data. Deployed on Render for reliable hosting and scalability.",
    image: "https://tse3.mm.bing.net/th/id/OIP.SfqTjFqO3VTC9Mbk0H5F6AHaD2?pid=Api&P=0&h=220",
    tags: ["Frontend", "Sports"],
    tech: ["React.js", "API Integration", "Render"],
    github: "https://github.com/Aashish-gif/CricketScoreByTAJ",
    live: "https://cricket-scores-by-taj.onrender.com",
  },
  {
    id: 3,
    title: "GitHub Data Management System",
    description:
      "Created a backend system to manage and retrieve GitHub-related data such as users, repositories, issues, and more. Designed RESTful APIs with Node.js and Express.js, integrated MongoDB for data storage, and documented API endpoints using Postman.",
    image: "https://tse2.mm.bing.net/th/id/OIP.lFRJzD9lmPHrULl4qJ9xngHaEO?pid=Api&P=0&h=220 ",
    tags: ["Backend", "API"],
    tech: ["Node.js", "Express.js", "MongoDB", "Postman"],
    github: "https://github.com/Aashish-gif/ClassTest",
    live: "https://class-test-c50m.onrender.com",
  },
  {
    id: 4,
    title: "Spring Step Website",
    description:
      "Built a responsive website to showcase Spring Step’s services with an engaging user interface. Utilized HTML, CSS, and JavaScript for development and deployed on Render for accessibility and reliable hosting.",
    image: "https://1.bp.blogspot.com/-_SMa35Mdcrg/XjFoYYKnFWI/AAAAAAAAM1g/6WJ6r2FeFocbwKLYfKF9hmyO2bnSGVuzgCLcBGAsYHQ/s1600/Web%2B1366%2B%25E2%2580%2593%2B1.jpg",
    tags: ["Frontend", "E-commerce"],
    tech: ["HTML", "CSS", "JavaScript", "Render"],
    github: "https://github.com/Aashish-gif/SpringStepwebsite",
    live: "https://spring-step-official-website.onrender.com",
  },

  ];

  const filters = ['All', 'Frontend', 'Backend', 'Fullstack', 'Tools', 'Fintech'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));

  return (
    <section id="projects" className="section-padding bg-[#0b0c10]">
      <div className="container-custom">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-[#F5F5F5] mb-8">
            Elite Projects
          </h2>
          <p className="text-2xl text-[#F5F5F5]/70 max-w-3xl mx-auto">
            Innovative solutions that demonstrate technical mastery and creative excellence
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <div className="flex items-center space-x-3 mb-4">
            <Filter className="w-6 h-6 text-[#FFD700]" />
            <span className="text-[#F5F5F5] font-semibold text-lg">Filter by:</span>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-[#FFD700] to-[#00FFFF] text-[#0b0c10] glow-gradient'
                    : 'glass text-[#F5F5F5] hover:text-[#FFD700] hover:glow-gold'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group glass rounded-2xl overflow-hidden hover:glow-gradient transition-all duration-500 hover:-translate-y-3"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c10]/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-2">
                    <a
                      href={project.github}
                      className="p-2 glass rounded-lg hover:glow-cyan transition-all duration-300"
                    >
                      <Github className="w-5 h-5 text-[#00FFFF]" />
                    </a>
                    <a
                      href={project.live}
                      className="p-2 glass rounded-lg hover:glow-gold transition-all duration-300"
                    >
                      <ExternalLink className="w-5 h-5 text-[#FFD700]" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gradient-to-r from-[#FFD700]/20 to-[#00FFFF]/20 text-gradient text-sm font-semibold rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-2xl font-bold text-[#F5F5F5] mb-4 group-hover:text-gradient transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-[#F5F5F5]/70 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-[#F5F5F5]/10 text-[#F5F5F5] text-sm rounded-lg border border-[#F5F5F5]/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-6">
                  <a
                    href={project.github}
                    className="flex items-center space-x-2 text-[#F5F5F5] hover:text-[#00FFFF] transition-colors duration-300"
                  >
                    <Github size={18} />
                    <span className="font-medium">Code</span>
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center space-x-2 text-[#F5F5F5] hover:text-[#FFD700] transition-colors duration-300"
                  >
                    <ExternalLink size={18} />
                    <span className="font-medium">Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;