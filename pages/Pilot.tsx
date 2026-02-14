import React from 'react';
import { Section } from '../components/Section';
import { CheckCircle2, MapPin, Calendar, Users, BarChart, Shield, Leaf, Building } from 'lucide-react';

export const Pilot: React.FC = () => {
  return (
    <div className="animate-fade-in pt-20">
       <div className="bg-slate-900 py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Singaraja Pilot Program</h1>
        <p className="text-blue-200 max-w-2xl mx-auto text-lg">
          Launching a proof-of-concept in North Bali, powered by Universitas Pendidikan Ganesha (Undiksha).
        </p>
      </div>

      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <div className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
               Why Singaraja?
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">A Strategic Research Hub</h2>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              Singaraja was selected as the pilot site due to its unique position as an academic hub (home to Undiksha) and its manageable healthcare network size, allowing for controlled, high-impact implementation before provincial scale-up.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 font-medium text-slate-800">
                <div className="bg-green-100 p-1 rounded-full text-green-600 mt-1"><Building size={16} /></div>
                <div>
                  <span className="block font-bold">Undiksha Collaboration</span>
                  <span className="text-sm text-slate-500 font-normal">Direct access to university research resources, IT infrastructure, and student talent for data collection.</span>
                </div>
              </li>
              <li className="flex items-start gap-3 font-medium text-slate-800">
                <div className="bg-green-100 p-1 rounded-full text-green-600 mt-1"><CheckCircle2 size={16} /></div>
                <div>
                  <span className="block font-bold">Manageable Scale</span>
                  <span className="text-sm text-slate-500 font-normal">Buleleng Regency offers a representative sample of Indonesia's healthcare tiers without the overwhelming complexity of a capital city.</span>
                </div>
              </li>
               <li className="flex items-start gap-3 font-medium text-slate-800">
                <div className="bg-green-100 p-1 rounded-full text-green-600 mt-1"><CheckCircle2 size={16} /></div>
                <div>
                  <span className="block font-bold">Digital Readiness</span>
                  <span className="text-sm text-slate-500 font-normal">Singaraja's Puskesmas network has shown high adaptability to digital health interventions.</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl relative h-[400px]">
             <img src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=1938" alt="Singaraja Landscape" className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex flex-col justify-end p-8 text-white">
                <div className="flex items-center gap-2 mb-2">
                   <MapPin size={20} className="text-primary-400" />
                   <span className="font-bold text-lg">Singaraja & Buleleng Regency</span>
                </div>
                <p className="text-sm opacity-90">Primary Focus Areas for Phase 1</p>
             </div>
          </div>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Implementation Phases</h2>
          <div className="relative">
             {/* Connector Line */}
             <div className="absolute top-8 left-0 w-full h-1 bg-slate-100 hidden md:block z-0"></div>
             
             <div className="grid md:grid-cols-4 gap-6 relative z-10">
                {[
                  { title: "Development", time: "Q4 2024", desc: "Platform localization at Undiksha labs, API integration with RSUD Buleleng, and baseline data collection.", icon: Calendar },
                  { title: "Deployment", time: "Q1 2025", desc: "Rollout to 5 pilot Puskesmas in Singaraja. User training workshops and initial system go-live.", icon: Users },
                  { title: "Evaluation", time: "Q3 2025", desc: "Impact assessment on prescription patterns. Refinement of AI algorithms based on North Bali data.", icon: BarChart },
                  { title: "Scale-Up", time: "2026+", desc: "Expansion to Gianyar and wider Bali. Integration with National SATUSEHAT platform.", icon: Shield },
                ].map((phase, i) => (
                  <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:-translate-y-1 transition-transform">
                     <div className="w-16 h-16 bg-white border-4 border-primary-50 rounded-full flex items-center justify-center mb-4 text-primary-600 font-bold text-lg relative mx-auto md:mx-0">
                        {i + 1}
                     </div>
                     <div className="text-xs font-bold text-primary-600 uppercase tracking-wide mb-1">{phase.time}</div>
                     <h3 className="text-xl font-bold text-slate-900 mb-2">{phase.title}</h3>
                     <p className="text-sm text-slate-600">{phase.desc}</p>
                  </div>
                ))}
             </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
           <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
             <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2"><Shield size={24} className="text-slate-700" /> Governance Structure</h2>
             <p className="text-slate-600 mb-6 leading-relaxed">
               The pilot is overseen by a multi-stakeholder steering committee ensuring ethical compliance, data sovereignty, and alignment with public health goals.
             </p>
             <ul className="space-y-3">
               <li className="flex items-center gap-2 text-sm text-slate-700 font-semibold"><div className="w-2 h-2 bg-slate-400 rounded-full"></div> Buleleng District Health Office</li>
               <li className="flex items-center gap-2 text-sm text-slate-700 font-semibold"><div className="w-2 h-2 bg-slate-400 rounded-full"></div> Undiksha Research Institute (LPPMP)</li>
               <li className="flex items-center gap-2 text-sm text-slate-700 font-semibold"><div className="w-2 h-2 bg-slate-400 rounded-full"></div> IDI Buleleng (Medical Association)</li>
             </ul>
           </div>
           
           <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-100">
             <h2 className="text-2xl font-bold text-emerald-900 mb-4 flex items-center gap-2"><Leaf size={24} className="text-emerald-600" /> Sustainability Plan</h2>
             <p className="text-emerald-800/80 mb-6 leading-relaxed">
               We design for long-term adoption, not just a one-off project. Our model includes transition to government ownership.
             </p>
             <ul className="space-y-3">
               <li className="flex items-center gap-2 text-sm text-emerald-800 font-semibold"><div className="w-2 h-2 bg-emerald-400 rounded-full"></div> Capacity building for local IT staff</li>
               <li className="flex items-center gap-2 text-sm text-emerald-800 font-semibold"><div className="w-2 h-2 bg-emerald-400 rounded-full"></div> Open-standard APIs for vendor neutrality</li>
               <li className="flex items-center gap-2 text-sm text-emerald-800 font-semibold"><div className="w-2 h-2 bg-emerald-400 rounded-full"></div> Integration into Buleleng health budget</li>
             </ul>
           </div>
        </div>
      </Section>
    </div>
  );
};