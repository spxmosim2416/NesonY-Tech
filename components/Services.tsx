
import React, { useState } from 'react';
import { Shield, UserCheck, Orbit, CreditCard, Zap, X, ArrowRight, Loader2, Sparkles, Send, CheckCircle, GraduationCap, Banknote } from 'lucide-react';
import { SERVICES, CONTACT_INFO } from '../constants';
import { ServiceCategory } from '../types';

const iconMap: Record<string, any> = {
  Shield: Shield,
  UserCheck: UserCheck,
  Orbit: Orbit,
  CreditCard: CreditCard,
  Zap: Zap,
  GraduationCap: GraduationCap,
  Banknote: Banknote
};

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceCategory | null>(null);
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState(false);

  const resetModal = () => {
    setSelectedService(null);
    setStep(1);
    setFormData({});
    setSuccess(false);
    setIsSubmitting(false);
  };

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
    }, 2000);
  };

  return (
    <section id="services" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black border-l-4 border-[#ff0055] pl-6 mb-4 uppercase tracking-tighter">
            The Ecosystem
          </h2>
          <p className="text-slate-500 max-w-xl text-xs font-bold uppercase tracking-[0.2em] ml-6">
            Refined Service Multiverse. Select a terminal to begin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <div 
                key={index} 
                onClick={() => setSelectedService(service)}
                className="group relative p-10 glass rounded-[2rem] border border-white/5 hover:border-[#ff0055]/50 transition-all duration-700 cursor-pointer overflow-hidden flex flex-col h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff0055]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="text-4xl mb-10 flex justify-between items-start">
                    <div className="bg-white/5 p-5 rounded-[1.5rem] group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border border-white/5 shadow-2xl">
                      <Icon className="text-[#00fbff] w-10 h-10" />
                    </div>
                    <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:bg-[#ff0055] group-hover:text-white transition-all">
                      <ArrowRight size={20} className="opacity-40 group-hover:opacity-100" />
                    </div>
                  </div>
                  
                  <h4 className="text-2xl font-black mb-3 text-white uppercase tracking-tight">{service.title}</h4>
                  <p className="text-slate-500 text-xs mb-8 font-medium leading-relaxed uppercase tracking-wider">
                    {service.description}
                  </p>
                  
                  <div className="space-y-4 mt-auto">
                    {service.items.slice(0, 3).map((item, i) => (
                      <div key={i} className="flex items-center text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-hover:text-slate-200 transition-colors">
                        <CheckCircle size={12} className="text-[#ff0055] mr-3" />
                        {item}
                      </div>
                    ))}
                    <div className="pt-6 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                       <span className="text-[10px] font-black text-[#ff0055] tracking-widest uppercase">Launch Service Request</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* SERVICE WIZARD MODAL */}
      {selectedService && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-[#010103]/95 backdrop-blur-3xl" onClick={resetModal}></div>
          <div className="relative bg-[#0b0b14] w-full max-w-xl rounded-[3rem] border border-white/10 shadow-[0_0_150px_rgba(255,0,85,0.3)] overflow-hidden animate-in zoom-in slide-in-from-bottom-10 duration-500">
            
            {/* Modal Header */}
            <div className="p-10 pb-6 flex items-center justify-between border-b border-white/5">
              <div className="flex items-center space-x-5">
                <div className="bg-white/5 p-4 rounded-[1.5rem] border border-white/10 shadow-inner">
                  {React.createElement(iconMap[selectedService.icon], { size: 30, className: "text-[#00fbff]" })}
                </div>
                <div>
                  <h3 className="font-black text-2xl text-white uppercase tracking-tight">{selectedService.title}</h3>
                  <div className="flex items-center space-x-3 mt-1">
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Stage {step} of 3</span>
                    <div className="flex space-x-1.5">
                      {[1, 2, 3].map(s => (
                        <div key={s} className={`w-4 h-1 rounded-full transition-all duration-500 ${step >= s ? 'bg-[#ff0055] w-8' : 'bg-white/10'}`}></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <button onClick={resetModal} className="w-12 h-12 glass rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#ff0055] transition-all">
                <X size={24} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-10 pt-8 min-h-[450px]">
              {success ? (
                <div className="flex flex-col items-center justify-center h-full text-center space-y-8 py-10">
                   <div className="w-24 h-24 bg-[#ff0055]/20 text-[#ff0055] rounded-full flex items-center justify-center animate-bounce shadow-[0_0_40px_rgba(255,0,85,0.3)]">
                     <Sparkles size={48} />
                   </div>
                   <div className="space-y-2">
                     <h2 className="text-4xl font-black uppercase tracking-tighter">Request Received</h2>
                     <p className="text-slate-500 text-xs font-bold uppercase tracking-widest max-w-xs mx-auto">
                       Service Terminal: <span className="text-[#00fbff]">{formData.subService}</span>
                     </p>
                   </div>
                   <p className="text-slate-400 text-sm max-w-sm font-medium">
                     Your request has been securely processed by MesonY. Our team will reach out at {CONTACT_INFO.phone} shortly.
                   </p>
                   <button onClick={resetModal} className="px-12 py-5 bg-gradient-to-r from-[#ff0055] to-[#7000ff] rounded-2xl font-black uppercase text-xs tracking-[0.3em] shadow-2xl hover:scale-105 transition-transform">
                     Close Terminal
                   </button>
                </div>
              ) : (
                <>
                  {step === 1 && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-left-4 duration-500">
                      <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em] border-l-2 border-[#ff0055] pl-4">Step 1: Specific Requirement</p>
                      <div className="grid grid-cols-1 gap-3">
                        {selectedService.items.map((item, i) => (
                          <button 
                            key={i}
                            onClick={() => {
                              handleInputChange('subService', item);
                              setStep(2);
                            }}
                            className="p-6 bg-white/5 border border-white/5 rounded-2xl text-left hover:border-[#ff0055] hover:bg-white/[0.08] transition-all flex items-center justify-between group shadow-sm hover:shadow-pink-500/10"
                          >
                            <span className="font-bold text-sm text-slate-200 group-hover:text-white">{item}</span>
                            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-[#ff0055] transition-all">
                              <ArrowRight size={18} />
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <form onSubmit={(e) => { e.preventDefault(); setStep(3); }} className="space-y-8 animate-in slide-in-from-right-10 duration-500">
                      <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em] border-l-2 border-[#00fbff] pl-4">Step 2: Requirement Details</p>
                      <div className="space-y-6">
                        {selectedService.formFields.map((field, i) => (
                          <div key={i} className="space-y-2">
                            <label className="text-[10px] font-black uppercase text-slate-500 ml-1 tracking-widest">{field.label}</label>
                            {field.type === 'select' ? (
                              <select 
                                required={field.required}
                                value={formData[field.name] || ''}
                                onChange={(e) => handleInputChange(field.name, e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 focus:border-[#ff0055] focus:bg-white/10 focus:outline-none transition-all text-sm font-medium appearance-none text-slate-200"
                              >
                                <option value="" className="bg-slate-900">Select an option</option>
                                {field.options?.map((opt, oi) => <option key={oi} value={opt} className="bg-slate-900">{opt}</option>)}
                              </select>
                            ) : field.type === 'textarea' ? (
                              <textarea 
                                required={field.required}
                                value={formData[field.name] || ''}
                                onChange={(e) => handleInputChange(field.name, e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 focus:border-[#ff0055] focus:bg-white/10 focus:outline-none transition-all text-sm min-h-[120px] font-medium placeholder-slate-600 text-slate-200"
                                placeholder={field.placeholder}
                              />
                            ) : (
                              <input 
                                type={field.type}
                                required={field.required}
                                value={formData[field.name] || ''}
                                onChange={(e) => handleInputChange(field.name, e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 focus:border-[#ff0055] focus:bg-white/10 focus:outline-none transition-all text-sm font-medium placeholder-slate-600 text-slate-200"
                                placeholder={field.placeholder}
                              />
                            )}
                          </div>
                        ))}
                      </div>
                      <div className="flex space-x-4 pt-6">
                        <button type="button" onClick={() => setStep(1)} className="px-10 py-5 bg-white/5 rounded-2xl font-black text-[10px] uppercase tracking-widest transition hover:bg-white/10">Back</button>
                        <button type="submit" className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] hover:opacity-90 transition shadow-xl">Confirm Details</button>
                      </div>
                    </form>
                  )}

                  {step === 3 && (
                    <div className="space-y-10 animate-in slide-in-from-right-10 duration-500">
                      <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em] border-l-2 border-green-500 pl-4">Step 3: Verification & Submission</p>
                      <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-10 space-y-6 shadow-inner">
                        <div className="flex justify-between border-b border-white/5 pb-4">
                           <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Selected Service</span>
                           <span className="text-sm font-black text-[#ff0055]">{selectedService.title}</span>
                        </div>
                        {Object.entries(formData).map(([key, val], i) => (
                          <div key={i} className="flex justify-between border-b border-white/5 pb-4 last:border-0 last:pb-0">
                            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{key.replace(/([A-Z])/g, ' $1')}</span>
                            <span className="text-sm font-black text-[#00fbff] text-right ml-4">{val}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex space-x-4">
                        <button onClick={() => setStep(2)} className="px-10 py-5 bg-white/5 rounded-2xl font-black text-[10px] uppercase tracking-widest transition hover:bg-white/10">Edit</button>
                        <button 
                          onClick={handleSubmit}
                          disabled={isSubmitting}
                          className="flex-1 bg-gradient-to-r from-[#ff0055] to-[#7000ff] rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] flex items-center justify-center shadow-2xl hover:scale-[1.02] transition-all"
                        >
                          {isSubmitting ? <Loader2 className="animate-spin mr-3" /> : <Send size={18} className="mr-3" />}
                          {isSubmitting ? 'PROCESSING...' : 'TRANSMIT REQUEST'}
                        </button>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
