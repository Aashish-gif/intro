// import React, { useState } from 'react';
// import { 
//   Code, 
//   Database, 
//   Palette, 
//   Settings,
//   Globe,
//   Server,
//   Smartphone,
//   GitBranch,
//   Cloud,
//   Lock
// } from 'lucide-react';

// const Skills: React.FC = () => {
//   const [activeFilter, setActiveFilter] = useState('All');

//   const skillCategories = [
//     {
//       category: 'Frontend',
//       skills: [
//         { name: 'React', level: 95, icon: Code },
//         { name: 'TypeScript', level: 92, icon: Code },
//         { name: 'Next.js', level: 90, icon: Globe },
//         { name: 'Tailwind CSS', level: 94, icon: Palette },
//         { name: 'React Native', level: 88, icon: Smartphone }
//       ]
//     },
//     {
//       category: 'Backend',
//       skills: [
//         { name: 'Node.js', level: 93, icon: Server },
//         { name: 'Python', level: 91, icon: Server },
//         { name: 'Express.js', level: 89, icon: Server },
//         { name: 'GraphQL', level: 85, icon: Database },
//         { name: 'REST APIs', level: 97, icon: Server }
//       ]
//     },
//     {
//       category: 'Database',
//       skills: [
//         { name: 'PostgreSQL', level: 92, icon: Database },
//         { name: 'MongoDB', level: 88, icon: Database },
//         { name: 'Redis', level: 84, icon: Database },
//         { name: 'Supabase', level: 90, icon: Database }
//       ]
//     },
//     {
//       category: 'Tools',
//       skills: [
//         { name: 'Git', level: 96, icon: GitBranch },
//         { name: 'Docker', level: 87, icon: Settings },
//         { name: 'AWS', level: 85, icon: Cloud },
//         { name: 'CI/CD', level: 90, icon: Settings },
//         { name: 'Security', level: 93, icon: Lock }
//       ]
//     }
//   ];

//   const filters = ['All', 'Frontend', 'Backend', 'Database', 'Tools'];

//   const filteredSkills = activeFilter === 'All' 
//     ? skillCategories 
//     : skillCategories.filter(cat => cat.category === activeFilter);

//   return (
//     <section id="skills" className="section-padding bg-gradient-to-b from-[#0b0c10] to-[#0d1015]">
//       <div className="container-custom">
//         <div className="text-center mb-20">
//           <h2 className="text-5xl md:text-6xl font-bold text-[#F5F5F5] mb-8">
//             Technical Mastery
//           </h2>
//           <p className="text-2xl text-[#F5F5F5]/70 max-w-3xl mx-auto">
//             Elite-level expertise across cutting-edge technologies and frameworks
//           </p>
//         </div>

//         {/* Filter Buttons */}
//         <div className="flex flex-wrap justify-center gap-4 mb-16">
//           {filters.map((filter) => (
//             <button
//               key={filter}
//               onClick={() => setActiveFilter(filter)}
//               className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
//                 activeFilter === filter
//                   ? 'bg-gradient-to-r from-[#FFD700] to-[#00FFFF] text-[#0b0c10] glow-gradient'
//                   : 'glass text-[#F5F5F5] hover:text-[#FFD700] hover:glow-gold'
//               }`}
//             >
//               {filter}
//             </button>
//           ))}
//         </div>

//         {/* Skills Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {filteredSkills.map((category, categoryIndex) => (
//             <div key={categoryIndex} className="glass rounded-2xl p-8 hover:glow-gradient transition-all duration-500 hover:-translate-y-2">
//               <h3 className="text-2xl font-bold text-[#F5F5F5] mb-8 text-center">
//                 {category.category}
//               </h3>
//               <div className="space-y-6">
//                 {category.skills.map((skill, skillIndex) => (
//                   <div key={skillIndex} className="group">
//                     <div className="flex items-center justify-between mb-3">
//                       <div className="flex items-center space-x-3">
//                         <skill.icon className="w-6 h-6 text-[#FFD700] group-hover:text-[#00FFFF] transition-colors duration-300" />
//                         <span className="text-[#F5F5F5] font-semibold">{skill.name}</span>
//                       </div>
//                       <span className="text-gradient font-bold">{skill.level}%</span>
//                     </div>
//                     <div className="w-full bg-[#F5F5F5]/10 rounded-full h-3 overflow-hidden">
//                       <div 
//                         className="h-full bg-gradient-to-r from-[#00FFFF] to-[#FFD700] rounded-full transition-all duration-1000 ease-out glow-gradient"
//                         style={{ width: `${skill.level}%` }}
//                       ></div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;

import React, { useState } from 'react';
import { Code, Database, Settings, Globe, Lock, GitBranch } from 'lucide-react';
import { Figma } from 'lucide-react'; // Use lucide-react's Figma icon if available, else replace with any icon

const Skills: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'HTML', level: 95, icon: Code },
        { name: 'CSS', level: 93, icon: Code },
        { name: 'React', level: 95, icon: Code },
        { name: 'Next.js', level: 90, icon: Globe },
        { name: 'Angular', level: 88, icon: Code }
      ]
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', level: 93, icon: Settings },
        { name: 'Express.js', level: 90, icon: Settings },
        { name: 'JavaScript', level: 95, icon: Code }
      ]
    },
    {
      category: 'Database',
      skills: [
        { name: 'MongoDB', level: 88, icon: Database },
        { name: 'MySQL', level: 90, icon: Database },
        { name: 'Redis', level: 85, icon: Database }
      ]
    },
    {
      category: 'Tools',
      skills: [
        { name: 'Git', level: 96, icon: GitBranch },
        { name: 'Figma', level: 85, icon: Figma },
        { name: 'Security', level: 92, icon: Lock },
        { name: 'Deployment', level: 90, icon: Settings }
      ]
    }
  ];

  const filters = ['All', 'Frontend', 'Backend', 'Database', 'Tools'];

  const filteredSkills = activeFilter === 'All' 
    ? skillCategories 
    : skillCategories.filter(cat => cat.category === activeFilter);

  return (
    <section id="skills" className="section-padding bg-gradient-to-b from-[#0b0c10] to-[#0d1015]">
      <div className="container-custom">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-[#F5F5F5] mb-8">
            Technical Mastery
          </h2>
          <p className="text-2xl text-[#F5F5F5]/70 max-w-3xl mx-auto">
            Elite-level expertise across cutting-edge technologies and frameworks
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-[#FFD700] to-[#00FFFF] text-[#0b0c10] glow-gradient'
                  : 'glass text-[#F5F5F5] hover:text-[#FFD700] hover:glow-gold'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredSkills.map((category, categoryIndex) => (
            <div key={categoryIndex} className="glass rounded-2xl p-8 hover:glow-gradient transition-all duration-500 hover:-translate-y-2">
              <h3 className="text-2xl font-bold text-[#F5F5F5] mb-8 text-center">
                {category.category}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <skill.icon className="w-6 h-6 text-[#FFD700] group-hover:text-[#00FFFF] transition-colors duration-300" />
                        <span className="text-[#F5F5F5] font-semibold">{skill.name}</span>
                      </div>
                      <span className="text-gradient font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-[#F5F5F5]/10 rounded-full h-3 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-[#00FFFF] to-[#FFD700] rounded-full transition-all duration-1000 ease-out glow-gradient"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
