
import React, { useState, useRef, useEffect } from 'react';
import { MapPin, Phone, Mail, Send, Bot, Globe, Shield } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import { getAssistantResponse } from '../services/geminiService';
import { Message } from '../types';

const Contact: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Namaste! Welcome to MesonY Digital Multiverse. I am your technical navigator. How can I assist you with Insurance, GPS, or Digital Services today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;
    
    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsTyping(true);

    const response = await getAssistantResponse(userMsg);
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsTyping(false);
  };

  return (
    <section id="contact" className="py-24 bg-[#010103] relative font-bell">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-[#ff0055] font-black uppercase tracking-[0.3em] text-[10px]">Contact Terminal</h2>
              <h3 className="text-5xl font-black">Get Connected</h3>
              <p className="text-slate-500 text-sm max-w-sm">
                Our support terminals are active 24/7. Reach out via encrypted digital channels or visit the Jewar Headquarters.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <a href={`tel:${CONTACT_INFO.phone}`} className="p-6 glass rounded-3xl border border-white/5 hover:border-[#ff0055] transition group flex items-center space-x-6">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-[#ff0055]">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Primary Line</p>
                  <p className="text-xl font-black">{CONTACT_INFO.phone}</p>
                </div>
              </a>

              <a href={`mailto:${CONTACT_INFO.email}`} className="p-6 glass rounded-3xl border border-white/5 hover:border-[#00fbff] transition group flex items-center space-x-6">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-[#00fbff]">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Digital Mail</p>
                  <p className="text-xl font-black">{CONTACT_INFO.email}</p>
                </div>
              </a>

              <div className="p-6 glass rounded-3xl border border-white/5 flex items-center space-x-6">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Headquarters</p>
                  <p className="text-xs text-slate-400 font-bold">{CONTACT_INFO.address}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-6 bg-white/5 rounded-3xl border border-white/5">
               <Shield className="text-[#ff0055]" />
               <div>
                  <p className="text-xs font-black uppercase text-white">Advanced Digital Protocols</p>
                  <p className="text-[10px] font-bold text-slate-500">Official Multiverse Infrastructure</p>
               </div>
            </div>
          </div>

          {/* AI CHAT INTERFACE - THE "WORMHOLE" */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#ff0055] to-[#7000ff] rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-[#0b0b14] rounded-[2.5rem] border border-white/10 p-8 h-[600px] flex flex-col overflow-hidden shadow-2xl">
              
              <div className="flex items-center space-x-4 mb-8 pb-6 border-b border-white/5">
                <div className="bg-[#ff0055] p-3 rounded-2xl shadow-[0_0_20px_rgba(255,0,85,0.4)]">
                  <Bot size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-black tracking-tight uppercase">MesonY Navigator</h4>
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                    <span className="text-[10px] font-black text-green-500 uppercase tracking-widest">Active Link</span>
                  </div>
                </div>
              </div>

              <div ref={scrollRef} className="flex-1 overflow-y-auto space-y-6 mb-6 pr-2 custom-scrollbar font-bell">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] p-4 rounded-2xl text-[13px] leading-relaxed shadow-sm font-medium ${
                      msg.role === 'user' 
                        ? 'bg-gradient-to-br from-[#ff0055] to-[#7000ff] text-white rounded-tr-none' 
                        : 'bg-white/5 text-slate-300 border border-white/5 rounded-tl-none'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white/5 text-slate-500 p-4 rounded-2xl text-[10px] font-black uppercase tracking-widest flex items-center space-x-2">
                      <span className="flex space-x-1">
                        <span className="w-1 h-1 bg-slate-500 rounded-full animate-bounce"></span>
                        <span className="w-1 h-1 bg-slate-500 rounded-full animate-bounce delay-75"></span>
                        <span className="w-1 h-1 bg-slate-500 rounded-full animate-bounce delay-150"></span>
                      </span>
                      <span>Processing Data...</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="relative mt-auto">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Query: 'Insurance help' or 'Aadhaar center'..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 pr-16 focus:outline-none focus:border-[#ff0055] focus:bg-white/[0.08] transition-all text-xs font-bold uppercase tracking-widest shadow-inner font-bell"
                />
                <button 
                  onClick={handleSend}
                  disabled={isTyping || !input.trim()}
                  className="absolute right-2 top-2 p-3 bg-[#ff0055] text-white rounded-xl hover:shadow-[0_0_15px_rgba(255,0,85,0.5)] disabled:opacity-50 transition-all"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
