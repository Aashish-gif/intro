import React, { useEffect, useState, useRef } from 'react';
import { Trophy, Target, Code, Users } from 'lucide-react';

const Achievements: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const achievements = [
    {
      icon: Code,
      number: 1200,
      label: "DSA Problems Mastered",
      suffix: "+"
    },
    {
      icon: Trophy,
      number: 25,
      label: "Elite Projects Delivered",
      suffix: "+"
    },
    {
      icon: Target,
      number: 8,
      label: "Professional Certifications",
      suffix: "+"
    },
    {
      icon: Users,
      number: 100,
      label: "Client Satisfaction Rate",
      suffix: "%"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const AnimatedCounter: React.FC<{ 
    target: number; 
    suffix: string; 
    isVisible: boolean; 
    duration?: number 
  }> = ({ target, suffix, isVisible, duration = 2500 }) => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      const increment = target / (duration / 16);
      let currentNumber = 0;

      const timer = setInterval(() => {
        currentNumber += increment;
        if (currentNumber >= target) {
          setCurrent(target);
          clearInterval(timer);
        } else {
          setCurrent(Math.floor(currentNumber));
        }
      }, 16);

      return () => clearInterval(timer);
    }, [target, isVisible, duration]);

    return (
      <span className="text-5xl md:text-6xl font-bold text-gradient">
        {current.toLocaleString()}{suffix}
      </span>
    );
  };

  return (
    <section ref={sectionRef} className="section-padding bg-gradient-to-b from-[#0b0c10] to-[#0d1015]">
      <div className="container-custom">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-[#F5F5F5] mb-8">
            Elite Achievements
          </h2>
          <p className="text-2xl text-[#F5F5F5]/70 max-w-3xl mx-auto">
            Measurable excellence and continuous innovation in software development mastery
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="group text-center glass rounded-2xl p-10 hover:glow-gradient transition-all duration-500 hover:-translate-y-3"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="mb-8">
                <div className="w-20 h-20 mx-auto glass rounded-2xl flex items-center justify-center group-hover:glow-gold transition-all duration-300">
                  <achievement.icon className="w-10 h-10 text-[#FFD700] group-hover:text-[#00FFFF] transition-colors duration-300" />
                </div>
              </div>
              
              <div className="mb-6">
                <AnimatedCounter
                  target={achievement.number}
                  suffix={achievement.suffix}
                  isVisible={isVisible}
                />
              </div>
              
              <p className="text-[#F5F5F5]/80 font-semibold leading-tight text-lg">
                {achievement.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-block glass rounded-2xl p-10 hover:glow-gradient transition-all duration-300">
            <h3 className="text-3xl font-bold text-[#F5F5F5] mb-6">
              Ready for Elite Collaboration
            </h3>
            <p className="text-[#F5F5F5]/70 mb-8 max-w-2xl text-xl">
              Let's discuss how my expertise can drive breakthrough innovation and exceptional results for your next venture.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-[#FFD700] to-[#00FFFF] text-[#0b0c10] rounded-full font-bold hover:glow-gradient hover:scale-105 transition-all duration-300"
            >
              Let's Connect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;