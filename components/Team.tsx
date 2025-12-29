
import React from 'react';
import { TEAM } from '../constants';
import { User, Cpu, ShieldCheck } from 'lucide-react';

const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-[#010103] relative border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-blue-500 font-bold uppercase tracking-[0.4em] text-[10px] mb-4">Core Personnel</h2>
          <h3 className="text-4xl md:text-5xl font-black">The Digital Council</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM.map((member, index) => (
            <div key={index} className="relative p-1 rounded-3xl group overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-[#ff0055]/50 to-[#00fbff]/50 opacity-0 group-hover:opacity-100 transition duration-500 rounded-3xl"></div>
               <div className="relative bg-[#0b0b14] p-8 rounded-[1.4rem] border border-white/5 h-full flex flex-col">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-[#ff0055] group-hover:text-[#00fbff] transition-colors duration-500">
                    <User size={30} />
                  </div>
                  <h4 className="text-2xl font-black mb-1">{member.name}</h4>
                  <p className="text-[#ff0055] text-xs font-black uppercase tracking-widest mb-6">{member.role}</p>
                  
                  <div className="mt-auto flex items-center space-x-3 p-4 bg-white/5 rounded-xl border border-white/5">
                     <Cpu size={16} className="text-slate-500" />
                     <p className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">{member.department}</p>
                  </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
