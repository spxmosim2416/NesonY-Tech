
import React from 'react';
import { ArrowRight, Zap, Globe, Shield } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import Logo from './Logo';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-48 pb-32 overflow-hidden bg-transparent font-bell">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[150px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-900/10 rounded-full blur-[150px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-12 max-w-4xl mx-auto">
          {/* Neon Logo Area with user-inspired glow */}
          <div className="flex justify-center mb-10">
             <div className="p-8 rounded-full border border-[#00fbff]/30 shadow-[0_0_50px_rgba(0,251,255,0.2)] bg-white/5 relative">
               <Logo size="lg" showHalo={true} />
               <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#ff0055] text-white text-[10px] font-black px-4 py-1 rounded-full shadow-[0_0_15px_rgba(255,0,85,0.5)] uppercase tracking-widest whitespace-nowrap">
                 Terminal Alpha
               </div>
             </div>
          </div>

          <div className="space-y-6">
            <div className="inline-flex items-center space-x-3 bg-white/5 border border-white/10 px-6 py-2.5 rounded-full text-[10px] font-black tracking-[0.4em] uppercase text-slate-300">
              <Shield className="w-3.5 h-3.5 text-[#00fbff]" />
              <span>OFFICIAL SERVICE ECOSYSTEM</span>
            </div>
            
            <h1 className="text-6xl md:text-9xl font-black leading-none tracking-tighter bg-gradient-to-b from-white to-slate-500 bg-clip-text text-transparent italic">
              MesonY <span className="text-[#ff0055] not-italic">Group</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-[#00fbff] font-black tracking-[0.3em] uppercase">
              {CONTACT_INFO.tagline}
            </p>
          </div>

          <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed text-sm font-bold uppercase tracking-wider">
            Jewar's elite digital ecosystem. Lead by <span className="text-white font-black underline decoration-[#ff0055] decoration-2 underline-offset-4">{CONTACT_INFO.founder}</span> and his core council.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 pt-8">
            <a href="#services" className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#ff0055] to-[#7000ff] rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative px-12 py-6 bg-[#010103] rounded-2xl flex items-center space-x-4 leading-none border border-white/10">
                <span className="text-white font-black tracking-[0.3em] text-xs">ENTER THE MULTIVERSE</span>
                <ArrowRight className="w-5 h-5 text-[#ff0055] group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
            
            <a href={`https://${CONTACT_INFO.website}`} target="_blank" className="px-10 py-6 glass rounded-2xl font-black text-xs tracking-[0.3em] hover:bg-white/10 transition flex items-center space-x-3 border border-white/5 group">
              <Globe className="w-4 h-4 text-[#00fbff] group-hover:rotate-12 transition-transform" />
              <span>TERMINAL: {CONTACT_INFO.website.toUpperCase()}</span>
            </a>
          </div>
        </div>

        {/* Dynamic Multi-layered Stats */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto font-bell">
           {[
             { label: 'Network', value: 'Jewar Hub' },
             { label: 'Security', value: 'Elite Grade' },
             { label: 'Efficiency', value: 'High Speed' },
             { label: 'Status', value: 'Online' }
           ].map((stat, i) => (
             <div key={i} className="glass p-8 rounded-[2rem] border border-white/5 shadow-2xl hover:border-[#00fbff]/30 hover:bg-white/10 transition-all duration-500 group">
                <p className="text-[#ff0055] font-black text-[10px] uppercase tracking-[0.4em] mb-2 group-hover:tracking-[0.5em] transition-all">{stat.label}</p>
                <p className="text-2xl font-black tracking-tighter">{stat.value}</p>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
