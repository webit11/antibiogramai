import React from 'react';
import { Section } from '../components/Section';
import { Heart, Globe, MapPin, CheckCircle2, TrendingUp, DollarSign, Users } from 'lucide-react';

export const Impact: React.FC = () => {
  return (
    <div className="animate-fade-in pt-20">
      <div className="bg-slate-900 py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Measuring Our Impact</h1>
        <p className="text-blue-200 max-w-2xl mx-auto text-lg">
          We are committed to transparent, quantifiable results that align with global health priorities.
        </p>
      </div>

      {/* Strategic Alignment */}
      <Section className="bg-white">
        <div className="max-w-5xl mx-auto">
           <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Strategic Alignment</h2>
           <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="flex flex-col items-center text-center p-8 bg-emerald-50 rounded-2xl border border-emerald-100 transition-transform hover:-translate-y-1">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mb-6">
                <Heart size={36} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">SDG 3: Health & Well-being</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Directly contributes to <strong>Target 3.d</strong>: Strengthening the capacity of all countries, in particular developing countries, for early warning, risk reduction and management of national and global health risks.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-8 bg-blue-50 rounded-2xl border border-blue-100 transition-transform hover:-translate-y-1">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-6">
                <Globe size={36} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">WHO GAP-AMR</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Supports <strong>Strategic Objective 2</strong>: Strengthen knowledge through surveillance and research. By digitizing primary care data, we fill a critical global knowledge gap.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-8 bg-red-50 rounded-2xl border border-red-100 transition-transform hover:-translate-y-1">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center text-red-600 mb-6">
                <MapPin size={36} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Indonesia NAP</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                 Operationalizes the <strong>National Action Plan on AMR (2020-2024)</strong> by establishing functional surveillance infrastructure at the Puskesmas level, a key national priority.
              </p>
            </div>
          </div>
        </div>
      </Section>
      
      {/* SMART Indicators */}
      <Section className="bg-slate-50">
         <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">SMART Targets (Singaraja Pilot)</h2>
         <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl border-l-4 border-primary-500 shadow-sm">
               <div className="flex items-center gap-3 mb-2">
                 <div className="bg-primary-100 p-2 rounded-lg text-primary-600"><CheckCircle2 size={20} /></div>
                 <h3 className="font-bold text-lg text-slate-900">Reduction in Prescribing</h3>
               </div>
               <p className="text-slate-600 pl-14">
                 Achieve a <span className="font-bold text-slate-900">20% reduction</span> in antibiotic prescription rates for non-bacterial upper respiratory tract infections within 12 months in Buleleng.
               </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-l-4 border-green-500 shadow-sm">
               <div className="flex items-center gap-3 mb-2">
                 <div className="bg-green-100 p-2 rounded-lg text-green-600"><TrendingUp size={20} /></div>
                 <h3 className="font-bold text-lg text-slate-900">Guideline Adherence</h3>
               </div>
               <p className="text-slate-600 pl-14">
                 Increase adherence to national antibiotic formulary guidelines from baseline to <span className="font-bold text-slate-900">>85%</span> in participating Singaraja clinics.
               </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-l-4 border-amber-500 shadow-sm">
               <div className="flex items-center gap-3 mb-2">
                 <div className="bg-amber-100 p-2 rounded-lg text-amber-600"><Users size={20} /></div>
                 <h3 className="font-bold text-lg text-slate-900">Data Coverage</h3>
               </div>
               <p className="text-slate-600 pl-14">
                 Integrate data from <span className="font-bold text-slate-900">2 key laboratories</span> and deploy to <span className="font-bold text-slate-900">5 Puskesmas</span> in the Singaraja area.
               </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-l-4 border-purple-500 shadow-sm">
               <div className="flex items-center gap-3 mb-2">
                 <div className="bg-purple-100 p-2 rounded-lg text-purple-600"><DollarSign size={20} /></div>
                 <h3 className="font-bold text-lg text-slate-900">Cost Efficiency</h3>
               </div>
               <p className="text-slate-600 pl-14">
                 Demonstrate a <span className="font-bold text-slate-900">15% reduction</span> in pharmaceutical spending on second-line antibiotics through optimized empirical therapy.
               </p>
            </div>
         </div>
      </Section>

      {/* Projected Outcomes */}
      <Section className="bg-slate-900 text-white">
         <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Long-Term Scalability</h2>
            <div className="grid md:grid-cols-2 gap-12">
               <div>
                  <h3 className="text-xl font-bold text-primary-400 mb-4">Health Outcomes</h3>
                  <ul className="space-y-4 text-slate-300">
                    <li className="flex items-start gap-3">
                      <span className="bg-slate-800 p-1 rounded mt-1"><CheckCircle2 size={14} /></span>
                      Improved patient recovery times due to more effective initial therapy.
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-slate-800 p-1 rounded mt-1"><CheckCircle2 size={14} /></span>
                      Reduced incidence of multi-drug resistant hospital-acquired infections.
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-slate-800 p-1 rounded mt-1"><CheckCircle2 size={14} /></span>
                      Preservation of last-resort antibiotics for critical cases.
                    </li>
                  </ul>
               </div>
               <div>
                  <h3 className="text-xl font-bold text-primary-400 mb-4">Economic Benefits</h3>
                  <ul className="space-y-4 text-slate-300">
                    <li className="flex items-start gap-3">
                      <span className="bg-slate-800 p-1 rounded mt-1"><CheckCircle2 size={14} /></span>
                      Lower healthcare costs related to prolonged hospital stays and intensive care.
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-slate-800 p-1 rounded mt-1"><CheckCircle2 size={14} /></span>
                      Protection of the tourism economy by maintaining Bali's reputation for health safety.
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-slate-800 p-1 rounded mt-1"><CheckCircle2 size={14} /></span>
                      Efficient allocation of pharmaceutical budgets for the JKN system.
                    </li>
                  </ul>
               </div>
            </div>
         </div>
      </Section>
    </div>
  );
};