import React from 'react';
import { Section } from '../components/Section';
import { Microscope, BarChart2, ShieldCheck, MapPin, Lock, Activity, ArrowRight, Zap, FileJson } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <div className="animate-fade-in pt-20">
      <div className="bg-slate-900 py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Platform Capabilities</h1>
        <p className="text-blue-200 max-w-2xl mx-auto text-lg">
          A comprehensive suite of tools designed to modernize antimicrobial stewardship in primary care.
        </p>
      </div>

      <div className="divide-y divide-slate-100">
        
        {/* Feature 1 */}
        <Section>
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div>
                <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center mb-6">
                  <Microscope size={28} />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">AI Recommendation Engine</h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  The core of our platform. By inputting basic patient parameters (age, symptoms, suspected site of infection), the AI analyzes historical resistance data from the specific region to suggest the most effective antibiotic.
                </p>
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2"><Zap size={16} className="text-amber-500" /> Use Case</h4>
                  <p className="text-sm text-slate-600">
                    A GP in Singaraja sees a patient with UTI symptoms. Instead of guessing, they consult the tool, which flags high resistance to Ciprofloxacin in Buleleng Regency this month and suggests Nitrofurantoin as a high-efficacy alternative.
                  </p>
                </div>
             </div>
             <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 flex items-center justify-center shadow-inner">
                {/* Mock UI */}
                <div className="w-full max-w-sm bg-white rounded-xl shadow-lg overflow-hidden border border-slate-100">
                  <div className="bg-primary-600 px-4 py-3 text-white font-bold text-sm flex justify-between">
                     <span>Recommendation</span>
                     <span>94% Confidence</span>
                  </div>
                  <div className="p-4">
                     <div className="text-2xl font-bold text-slate-800 mb-1">Nitrofurantoin</div>
                     <div className="text-xs text-slate-500 mb-4">100mg orally twice daily for 5 days</div>
                     <div className="flex gap-2 text-xs">
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded font-bold">Susceptible</span>
                        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">First Line</span>
                     </div>
                  </div>
                </div>
             </div>
          </div>
        </Section>

        {/* Feature 2 */}
        <Section className="bg-slate-50">
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div className="order-2 md:order-1 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                <div className="space-y-3">
                   <div className="h-4 bg-slate-100 rounded w-full"></div>
                   <div className="h-32 bg-primary-50 rounded-xl w-full flex items-end justify-around p-4 pb-0">
                      <div className="w-8 bg-primary-300 h-1/3 rounded-t"></div>
                      <div className="w-8 bg-primary-400 h-1/2 rounded-t"></div>
                      <div className="w-8 bg-primary-500 h-3/4 rounded-t"></div>
                      <div className="w-8 bg-primary-600 h-full rounded-t"></div>
                   </div>
                   <div className="flex justify-between text-xs text-slate-500">
                      <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span>
                   </div>
                </div>
             </div>
             <div className="order-1 md:order-2">
                <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
                  <BarChart2 size={28} />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Real-Time Resistance Dashboard</h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  Interactive visualizations that allow health officials and clinic directors to monitor resistance trends as they evolve. Track specific pathogens (e.g., E. coli, S. aureus) against antibiotic classes.
                </p>
                <ul className="space-y-3">
                   <li className="flex items-center gap-3 text-slate-700"><ArrowRight size={16} className="text-indigo-500" /> Filter by district, facility type, or time period.</li>
                   <li className="flex items-center gap-3 text-slate-700"><ArrowRight size={16} className="text-indigo-500" /> Identify emerging outbreaks of resistant strains.</li>
                   <li className="flex items-center gap-3 text-slate-700"><ArrowRight size={16} className="text-indigo-500" /> Export charts for reports and policy meetings.</li>
                </ul>
             </div>
          </div>
        </Section>

        {/* Feature 3 */}
        <Section>
           <div className="grid md:grid-cols-2 gap-12 items-center">
             <div>
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
                  <MapPin size={28} />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Regional Antibiogram Generator</h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  Traditionally, creating cumulative antibiograms is a manual, annual process in hospitals. We automate this for the primary care level, generating CLSI-compliant tables instantly.
                </p>
                 <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2"><FileJson size={16} className="text-emerald-500" /> Standardized Output</h4>
                  <p className="text-sm text-slate-600">
                    Produces tabular data showing % Susceptible for each organism-antibiotic pair, ready for printing or digital distribution to clinicians.
                  </p>
                </div>
             </div>
             <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 flex items-center justify-center">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 w-full max-w-md">
                   <div className="grid grid-cols-4 gap-2 text-xs font-bold text-slate-700 border-b pb-2 mb-2">
                      <span className="col-span-1">Pathogen</span>
                      <span className="text-center">Amox</span>
                      <span className="text-center">Cipro</span>
                      <span className="text-center">Gent</span>
                   </div>
                   <div className="space-y-2 text-sm">
                      <div className="grid grid-cols-4 gap-2">
                        <span className="col-span-1 font-medium">E. coli</span>
                        <span className="text-center text-red-500 font-bold">45%</span>
                        <span className="text-center text-amber-500 font-bold">78%</span>
                        <span className="text-center text-green-600 font-bold">92%</span>
                      </div>
                      <div className="grid grid-cols-4 gap-2">
                        <span className="col-span-1 font-medium">K. pneumo</span>
                        <span className="text-center text-red-500 font-bold">50%</span>
                        <span className="text-center text-green-600 font-bold">88%</span>
                        <span className="text-center text-green-600 font-bold">95%</span>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </Section>
        
        {/* Feature 4, 5, 6 in a grid */}
        <Section className="bg-slate-50">
           <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Enterprise-Grade Infrastructure</h2>
           <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow">
                 <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mb-4">
                    <ShieldCheck size={20} />
                 </div>
                 <h3 className="text-xl font-bold text-slate-900 mb-3">Prescription Audit</h3>
                 <p className="text-slate-600 text-sm leading-relaxed">
                   Automated tracking of Defined Daily Doses (DDD) per 1000 patient-days. Enables facility accreditation by proving adherence to antimicrobial stewardship guidelines.
                 </p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow">
                 <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <Lock size={20} />
                 </div>
                 <h3 className="text-xl font-bold text-slate-900 mb-3">Secure Data Integration</h3>
                 <p className="text-slate-600 text-sm leading-relaxed">
                   End-to-end encryption for all patient data. Compliant with Indonesian PDP Law and international HIPAA standards. Data is anonymized before aggregate analysis.
                 </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow">
                 <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <Activity size={20} />
                 </div>
                 <h3 className="text-xl font-bold text-slate-900 mb-3">Role-Based Access</h3>
                 <p className="text-slate-600 text-sm leading-relaxed">
                   Distinct interfaces for Clinicians (Prescribing view), Administrators (Dashboard view), and Researchers (Data export view) to ensure appropriate data governance.
                 </p>
              </div>
           </div>
        </Section>
      </div>
    </div>
  );
};