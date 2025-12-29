
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 glass top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <Logo size="sm" showHalo={false} />
            <span className="text-2xl font-black tracking-tighter">
              Meson<span className="text-[#00fbff]">Y</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8 text-xs font-bold uppercase tracking-[0.2em]">
            <a href="#home" className="hover:text-[#ff0055] transition-colors">Home</a>
            <a href="#services" className="hover:text-[#ff0055] transition-colors">Ecosystem</a>
            <a href="#team" className="hover:text-[#ff0055] transition-colors">Council</a>
            <a href="#contact" className="bg-gradient-to-r from-[#ff0055] to-[#7000ff] text-white px-6 py-2.5 rounded-full hover:shadow-[0_0_20px_rgba(255,0,85,0.5)] transition duration-300">Contact Portal</a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-[#00fbff]">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#010103] border-t border-white/10 p-4 space-y-4 shadow-2xl animate-in slide-in-from-top-4">
          <a href="#home" className="block text-lg font-medium" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#services" className="block text-lg font-medium" onClick={() => setIsOpen(false)}>Ecosystem</a>
          <a href="#team" className="block text-lg font-medium" onClick={() => setIsOpen(false)}>Council</a>
          <a href="#contact" className="block text-lg font-bold text-[#ff0055]" onClick={() => setIsOpen(false)}>Access Terminal</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
