import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0b0c10] border-t border-[#F5F5F5]/10 py-16">
      <div className="container-custom">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Code className="w-6 h-6 text-[#FFD700]" />
            <span className="text-[#F5F5F5] font-bold text-xl">
              © 2025 Aashish Tejwani
            </span>
            <span className="text-[#F5F5F5]/50 text-xl">—</span>
            <span className="text-[#F5F5F5]/70 font-medium">
              Designed with precision & innovation
            </span>
            <Heart className="w-5 h-5 text-[#00FFFF]" />
          </div>
          <p className="text-[#F5F5F5]/50">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;