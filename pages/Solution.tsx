import React from 'react';
import { Section } from '../components/Section';
import { Database, Cpu, FileText, CheckCircle2, ArrowRight, Users, Stethoscope, Server, Shield, Network } from 'lucide-react';

export const Solution: React.FC = () => {
  return (
    <div className="animate-fade-in pt-20">
      <div className="bg-slate-900 py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">The Antibiogram-AI Solution</h1>
        <p className="text-blue-200 max-w-2xl mx-auto text-lg">
          A comprehensive digital intervention designed to close the surveillance loop between laboratories and primary care in Indonesia.
        </p>
      </div>

      {/* The Context */}
      <Section>
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Understanding the Challenge</h2>
          <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
            <p>
              In Indonesia, primary healthcare facilities (Puskesmas) are the first line of defense against infectious diseases. However, they often operate in an information vacuum. While hospitals may have antibiograms (charts showing local bacterial resistance), this critical data rarely reaches primary care physicians in a usable format.
            </p>
            <p>
              This disconnect forces doctors to prescribe antibiotics "empirically"—making educated guesses without knowing if the bacteria circulating in their specific village or district are resistant to the chosen drug. This practice drives the evolution of superbugs.
            </p>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-8 rounded-r-xl">
              <h4 className="font-bold text-amber-800 mb-2">The Singaraja Context</h4>
              <p className="text-amber-900/80 text-base">
                Singaraja, the capital of Buleleng Regency, serves as a crucial hub in North Bali. It presents a unique mix of urban and semi-rural healthcare challenges. Implementing a surveillance system here provides a scalable model for diverse Indonesian districts, leveraging Undiksha's local research infrastructure.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Architecture */}
      <Section className="bg-slate-50">
        <div className="text-center mb-16">
           <h2 className="text-3xl font-bold text-slate-900 mb-4">System Architecture</h2>
           <p className="text-slate-600 max-w-2xl mx-auto">
             Built for interoperability, security, and scale, leveraging Indonesia's SATUSEHAT national health data standards.
           </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
           {/* Step 1 */}
           <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 relative">
             <div className="absolute top-0 right-0 p-4 opacity-10 text-primary-900"><Database size={64} /></div>
             <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
               <span className="bg-primary-100 text-primary-700 w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
               Data Aggregation
             </h3>
             <p className="text-slate-600 text-sm leading-relaxed mb-4">
               We ingest culture and sensitivity data from partner microbiology laboratories in North Bali (e.g., RSUD Buleleng). The system standardizes this data, mapping it to WHO WHONET standards.
             </p>
             <div className="text-xs font-mono bg-slate-100 p-3 rounded text-slate-500 border border-slate-200">
               JSON format compliant with HL7 FHIR for SATUSEHAT integration readiness.
             </div>
           </div>

           {/* Step 2 */}
           <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 relative">
             <div className="absolute top-0 right-0 p-4 opacity-10 text-primary-900"><Cpu size={64} /></div>
             <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
               <span className="bg-primary-100 text-primary-700 w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
               AI Processing
             </h3>
             <p className="text-slate-600 text-sm leading-relaxed mb-4">
               Our machine learning models analyze the aggregated data to generate <span className="font-semibold text-primary-700">Cumulative Antibiograms</span> dynamically.
             </p>
             <ul className="space-y-2 text-sm text-slate-600">
               <li className="flex items-start gap-2"><CheckCircle2 size={14} className="mt-1 text-green-500" /> Geographic stratification (Buleleng District)</li>
               <li className="flex items-start gap-2"><CheckCircle2 size={14} className="mt-1 text-green-500" /> Temporal trend analysis</li>
               <li className="flex items-start gap-2"><CheckCircle2 size={14} className="mt-1 text-green-500" /> Patient demographic risk weighting</li>
             </ul>
           </div>

           {/* Step 3 */}
           <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 relative">
             <div className="absolute top-0 right-0 p-4 opacity-10 text-primary-900"><Stethoscope size={64} /></div>
             <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
               <span className="bg-primary-100 text-primary-700 w-8 h-8 rounded-full flex items-center justify-center text-sm">3</span>
               Clinical Deployment
             </h3>
             <p className="text-slate-600 text-sm leading-relaxed mb-4">
               Insights are delivered via a web dashboard and API. When a doctor diagnoses a condition (e.g., UTI), the system recommends antibiotics based on local Singaraja efficacy rates.
             </p>
             <div className="bg-green-50 border border-green-100 p-3 rounded text-xs text-green-800 font-medium flex items-center gap-2">
               <CheckCircle2 size={14} /> Result: Evidence-Based Prescription
             </div>
           </div>
        </div>
      </Section>

      <Section className="bg-slate-900 text-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">SATUSEHAT Integration Readiness</h2>
            <p className="text-slate-400 text-lg mb-6 leading-relaxed">
              Antibiogram-AI is designed to function as a seamless module within Indonesia's national health data ecosystem, SATUSEHAT.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                 <div className="bg-slate-800 p-3 rounded-xl h-fit"><Network className="text-primary-400" size={24} /></div>
                 <div>
                   <h4 className="font-bold text-lg">Interoperability</h4>
                   <p className="text-slate-400 text-sm">Full adherence to HL7 FHIR standards for exchanging diagnostic reports and medication requests.</p>
                 </div>
              </div>
              <div className="flex gap-4">
                 <div className="bg-slate-800 p-3 rounded-xl h-fit"><Server className="text-primary-400" size={24} /></div>
                 <div>
                   <h4 className="font-bold text-lg">Centralized Reporting</h4>
                   <p className="text-slate-400 text-sm">Automated upward reporting of resistance statistics to the Ministry of Health, reducing administrative burden.</p>
                 </div>
              </div>
              <div className="flex gap-4">
                 <div className="bg-slate-800 p-3 rounded-xl h-fit"><Shield className="text-primary-400" size={24} /></div>
                 <div>
                   <h4 className="font-bold text-lg">Data Sovereignty</h4>
                   <p className="text-slate-400 text-sm">All data is processed and stored within secure Indonesian data centers, complying with PDP Law.</p>
                 </div>
              </div>
            </div>
          </div>
          <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700">
             {/* Mock Code Snippet */}
             <div className="font-mono text-xs text-slate-300">
               <div className="text-slate-500 mb-2">// Example FHIR Structure for Sensitivity Report</div>
               <div className="pl-4">
                 <span className="text-purple-400">"resourceType"</span>: <span className="text-green-400">"DiagnosticReport"</span>,<br/>
                 <span className="text-purple-400">"status"</span>: <span className="text-green-400">"final"</span>,<br/>
                 <span className="text-purple-400">"code"</span>: {'{'}<br/>
                 &nbsp;&nbsp;<span className="text-purple-400">"coding"</span>: [<br/>
                 &nbsp;&nbsp;&nbsp;&nbsp;{'{'} <span className="text-purple-400">"system"</span>: <span className="text-green-400">"http://loinc.org"</span>, <span className="text-purple-400">"code"</span>: <span className="text-green-400">"18725-2"</span> {'}'}<br/>
                 &nbsp;&nbsp;]<br/>
                 {'}'},<br/>
                 <span className="text-purple-400">"conclusion"</span>: <span className="text-green-400">"E. coli resistant to Ciprofloxacin (R)"</span>
               </div>
               <div className="mt-4 pt-4 border-t border-slate-700 text-slate-500 italic">
                 Standardized data enables national-scale analytics.
               </div>
             </div>
          </div>
        </div>
      </Section>
    </div>
  );
};