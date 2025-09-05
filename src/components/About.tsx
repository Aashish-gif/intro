// import React from 'react';
// import { TrendingUp, Shield, Zap } from 'lucide-react';

// const About: React.FC = () => {
//   const highlights = [
//     {
//       icon: TrendingUp,
//       title: "Financial Innovation",
//       description: "Architecting algorithmic trading systems and next-generation fintech solutions"
//     },
//     {
//       icon: Shield,
//       title: "Security Excellence",
//       description: "Building fortress-grade applications with enterprise-level security architecture"
//     },
//     {
//       icon: Zap,
//       title: "Performance Mastery",
//       description: "Optimizing for lightning-fast execution and exceptional user experiences"
//     }
//   ];

//   return (
//     <section id="about" className="section-padding bg-[#0b0c10]">
//       <div className="container-custom">
//         <div className="grid lg:grid-cols-2 gap-20 items-center">
//           <div>
//             <h2 className="text-5xl md:text-6xl font-bold text-[#F5F5F5] mb-8">
//               About Me
//             </h2>
//             <p className="text-xl text-[#F5F5F5]/80 mb-8 leading-relaxed">
//               I'm an elite full-stack developer specializing in quantitative finance and cutting-edge fintech solutions. 
//               With deep expertise in modern web technologies and financial systems, I architect solutions that 
//               seamlessly bridge complex algorithms with intuitive user experiences.
//             </p>
//             <p className="text-xl text-[#F5F5F5]/80 mb-10 leading-relaxed">
//               My methodology combines rigorous technical excellence with innovative problem-solving, ensuring every 
//               project delivers both breakthrough innovation and rock-solid reliability. I excel in high-stakes 
//               environments where precision meets bleeding-edge technology.
//             </p>
//             <div className="inline-block px-8 py-4 glass rounded-full glow-gradient">
//               <span className="text-gradient font-bold text-lg">
//                 "Transforming complexity into elegance, data into intelligence."
//               </span>
//             </div>
//           </div>

//           <div className="space-y-6">
//             <div className="relative">
//               <div className="w-96 h-96 mx-auto glass rounded-3xl p-3 glow-gradient">
//                 <div className="w-full h-full bg-gradient-to-br from-[#FFD700]/10 to-[#00FFFF]/10 rounded-2xl flex items-center justify-center relative overflow-hidden">
//                   {/* Animated Background Pattern */}
//                   <div className="absolute inset-0">
//                     <div className="absolute top-4 left-4 hexagon opacity-20" style={{ animationDelay: '0s' }}></div>
//                     <div className="absolute bottom-4 right-4 hexagon opacity-15" style={{ animationDelay: '2s' }}></div>
//                   </div>
//                   <div className="text-9xl opacity-30 relative z-10">👨‍💻</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="mt-24 grid md:grid-cols-3 gap-10">
//           {highlights.map((highlight, index) => (
//             <div
//               key={index}
//               className="group glass rounded-2xl p-8 hover:glow-gradient transition-all duration-500 hover:-translate-y-3"
//               style={{ animationDelay: `${index * 200}ms` }}
//             >
//               <div className="mb-6">
//                 <div className="w-16 h-16 mx-auto glass rounded-2xl flex items-center justify-center group-hover:glow-gold transition-all duration-300">
//                   <highlight.icon className="w-10 h-10 text-[#FFD700] group-hover:text-[#00FFFF] transition-colors duration-300" />
//                 </div>
//               </div>
//               <h3 className="text-2xl font-bold text-[#F5F5F5] mb-4 group-hover:text-gradient transition-all duration-300">
//                 {highlight.title}
//               </h3>
//               <p className="text-[#F5F5F5]/70 leading-relaxed text-lg">
//                 {highlight.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;


import React from 'react';
import { TrendingUp, Shield, Zap } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: TrendingUp,
      title: "Innovative Solutions",
      description: "Architecting scalable, modern web applications with clean, maintainable code"
    },
    {
      icon: Shield,
      title: "Robust Security",
      description: "Implementing secure and reliable applications following best practices"
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "Optimizing applications for speed, responsiveness, and smooth user experiences"
    }
  ];

  return (
    <section id="about" className="section-padding bg-[#0b0c10]">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-[#F5F5F5] mb-8">
              About Me
            </h2>
            <p className="text-xl text-[#F5F5F5]/80 mb-8 leading-relaxed">
              “I’m an elite full-stack developer specializing in building modern, scalable web applications. 
              With deep expertise in cutting-edge web technologies, 
              I design and implement solutions that combine robust backend logic with intuitive user experiences.”
            </p>
            <p className="text-xl text-[#F5F5F5]/80 mb-10 leading-relaxed">
              My methodology combines rigorous technical excellence with innovative problem-solving, ensuring every 
              project delivers both reliable performance and a seamless user experience. I thrive in fast-paced 
              environments where precision and innovation go hand in hand.
            </p>
            <div className="inline-block px-8 py-4 glass rounded-full glow-gradient">
              <span className="text-gradient font-bold text-lg">
                "Transforming complexity into elegance, code into impact."
              </span>
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative">
              <div className="w-96 h-96 mx-auto glass rounded-3xl p-3 glow-gradient">
                <div className="w-full h-full bg-gradient-to-br from-[#FFD700]/10 to-[#00FFFF]/10 rounded-2xl flex items-center justify-center relative overflow-hidden">
                  {/* Animated Background Pattern */}
                  <div className="absolute inset-0">
                    <div className="absolute top-4 left-4 hexagon opacity-20" style={{ animationDelay: '0s' }}></div>
                    <div className="absolute bottom-4 right-4 hexagon opacity-15" style={{ animationDelay: '2s' }}></div>
                  </div>
                  <div className="text-9xl opacity-30 relative z-10">👨‍💻</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 grid md:grid-cols-3 gap-10">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="group glass rounded-2xl p-8 hover:glow-gradient transition-all duration-500 hover:-translate-y-3"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto glass rounded-2xl flex items-center justify-center group-hover:glow-gold transition-all duration-300">
                  <highlight.icon className="w-10 h-10 text-[#FFD700] group-hover:text-[#00FFFF] transition-colors duration-300" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#F5F5F5] mb-4 group-hover:text-gradient transition-all duration-300">
                {highlight.title}
              </h3>
              <p className="text-[#F5F5F5]/70 leading-relaxed text-lg">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
