
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Team from './components/Team';
import Contact from './components/Contact';
import Logo from './components/Logo';
import { Copyright, Heart, Zap, MessageSquare } from 'lucide-react';
import { CONTACT_INFO } from './constants';

const App: React.FC = () => {
  const chatWithCEO = () => {
    const message = `Hello ${CONTACT_INFO.founder}, I am interested in MesonY services.`;
    window.open(`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-transparent selection:bg-[#ff0055] selection:text-white font-bell">
      <Navbar />
      <main>
        <Hero />
        
        {/* Ticker Bar - Universe Style matching Mobile Snippet */}
        <div className="bg-gradient-to-r from-[#ff0055]/5 via-[#ff0055]/15 to-[#ff0055]/5 py-3 overflow-hidden border-y border-[#ff0055]/30 relative z-20">
          <div className="animate-ticker">
            <span className="text-[10px] md:text-[12px] font-black uppercase tracking-[0.4em] mx-10 text-[#00fbff] flex items-center">
              🚀 CEO: {CONTACT_INFO.founder} • PROJECT MANAGER: {CONTACT_INFO.projectManager} • ESTABLISHED 2025 • BEYOND BOUNDARIES, BEYOND TECHNOLOGY •
              <Zap className="w-3 h-3 mx-4 text-white fill-white" />
              🚀 CEO: {CONTACT_INFO.founder} • PROJECT MANAGER: {CONTACT_INFO.projectManager} • ESTABLISHED 2025 • BEYOND BOUNDARIES, BEYOND TECHNOLOGY
            </span>
          </div>
        </div>

        <Services />
        
        {/* Chat with CEO Button - Styled like the LinearGradient button in React Native */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex justify-center">
          <button 
            onClick={chatWithCEO}
            className="w-full max-w-2xl bg-gradient-to-r from-[#ff0055] to-[#7000ff] p-6 rounded-full flex items-center justify-center group hover:shadow-[0_0_50px_rgba(255,0,85,0.4)] transition-all duration-500 transform hover:scale-[1.02]"
          >
            <div className="flex items-center space-x-4">
              <MessageSquare className="w-6 h-6 text-white" />
              <span className="font-black text-white text-lg tracking-[0.2em] uppercase">CHAT WITH CEO</span>
            </div>
          </button>
        </div>

        <Team />
        <Contact />
      </main>
      
      <footer className="bg-[#0b0b14] border-t border-white/5 py-20 relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#ff0055]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
            <div className="space-y-6">
              <div className="flex items-center justify-center md:justify-start space-x-4">
                <Logo size="sm" showHalo={false} />
                <span className="text-3xl font-black tracking-tighter">
                  Meson<span className="text-[#ff0055]">Y</span>
                </span>
              </div>
              <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.25em] max-w-xs leading-relaxed">
                {CONTACT_INFO.tagline}. <br/>Trusted Digital Hub in Jewar, UP.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-16 text-[10px] font-bold uppercase tracking-[0.4em]">
              <div className="space-y-5">
                <p className="text-white border-b border-[#ff0055] pb-2 inline-block">Support Axis</p>
                <a href={`tel:${CONTACT_INFO.phone}`} className="block text-slate-500 hover:text-[#00fbff] transition">{CONTACT_INFO.phone}</a>
                <a href={`mailto:${CONTACT_INFO.email}`} className="block text-slate-500 hover:text-[#00fbff] transition">Secure Email</a>
              </div>
              <div className="space-y-5">
                <p className="text-white border-b border-[#00fbff] pb-2 inline-block">Protocols</p>
                <a href="#" className="block text-slate-500 hover:text-[#ff0055] transition">Privacy Policy</a>
                <a href="#" className="block text-slate-500 hover:text-[#ff0055] transition">Terms of Use</a>
              </div>
            </div>
          </div>
          
          <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-600">
             <div className="flex items-center" style={{ fontFamily: '"Bell MT", serif' }}>
                <Copyright className="w-3.5 h-3.5 mr-2" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em]">2025 MesonY Technology Pvt Ltd. All Systems Operational.</span>
             </div>
             <div className="flex items-center bg-white/5 px-4 py-2 rounded-full border border-white/5" style={{ fontFamily: '"Bell MT", serif' }}>
                <span className="text-[11px] font-bold uppercase tracking-[0.2em]">Made in Jewar</span>
                <Heart className="w-3 h-3 mx-3 text-[#ff0055] fill-[#ff0055] animate-pulse" />
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
