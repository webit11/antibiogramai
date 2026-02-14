import React from 'react';
import { Button } from '../components/Button';
import { Section } from '../components/Section';
import { Globe, TrendingUp, AlertTriangle, ShieldCheck, Activity, ArrowRight, Heart, Database, MapPin } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2070" 
            alt="Medical Data Analysis" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-primary-900/90 to-primary-800/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10 text-center md:text-left">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-200 text-sm font-medium mb-6 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Pilot Initiative: Singaraja, Bali
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
              Precision Surveillance for <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-300">
                Smarter Antibiotic Use
              </span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100/80 mb-8 leading-relaxed max-w-2xl">
              Antibiogram-AI integrates artificial intelligence with local antibiogram data to empower primary care physicians with real-time, evidence-based empirical prescribing support. Spearheaded by Universitas Pendidikan Ganesha (Undiksha).
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button variant="white" size="lg" onClick={() => onNavigate('solution')}>
                Explore the Solution
              </Button>
              <Button variant="outline" size="lg" onClick={() => onNavigate('auth')}>
                Login to Dashboard
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* AMR Crisis Overview */}
      <Section className="bg-slate-50">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">The Global AMR Crisis</h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Antimicrobial Resistance (AMR) is a silent pandemic. Without intervention, drug-resistant infections could cause 10 million deaths annually by 2050. The battleground is shifting to primary care, where surveillance gaps are widest.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { 
              icon: Globe, 
              color: "text-red-500", 
              bg: "bg-red-50",
              stat: "1.27M", 
              label: "Annual Deaths", 
              desc: "Directly attributable to bacterial AMR worldwide." 
            },
            { 
              icon: TrendingUp, 
              color: "text-orange-500", 
              bg: "bg-orange-50",
              stat: "Rising", 
              label: "Resistance Rates", 
              desc: "Critical increases in Southeast Asia requiring urgent action." 
            },
            { 
              icon: AlertTriangle, 
              color: "text-amber-500", 
              bg: "bg-amber-50",
              stat: "Blind Spot", 
              label: "Surveillance Gap", 
              desc: "Lack of local antibiogram data in primary healthcare facilities." 
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className={`w-12 h-12 ${item.bg} ${item.color} rounded-xl flex items-center justify-center mb-6`}>
                <item.icon size={24} />
              </div>
              <div className="text-4xl font-bold text-slate-900 mb-2">{item.stat}</div>
              <div className="text-lg font-semibold text-slate-800 mb-2">{item.label}</div>
              <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* System Overview */}
      <Section className="bg-white">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
             <div className="inline-block px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-semibold mb-4">
               System Capabilities
             </div>
             <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Transforming Data into Action</h2>
             <p className="text-slate-600 text-lg mb-6 leading-relaxed">
               Antibiogram-AI isn't just a dashboard; it's a clinical decision support ecosystem. We aggregate fragmented laboratory data from North Bali, process it through machine learning algorithms, and deliver actionable insights directly to Puskesmas in Singaraja.
             </p>
             <div className="space-y-4">
               {[
                 "Real-time integration with SATUSEHAT & Lab Systems",
                 "Localized cumulative antibiograms for Buleleng Regency",
                 "Clinical decision support for empirical prescribing"
               ].map((feat, i) => (
                 <div key={i} className="flex items-start gap-3">
                   <div className="mt-1 bg-primary-100 p-1 rounded-full text-primary-600">
                     <ShieldCheck size={16} />
                   </div>
                   <span className="text-slate-700 font-medium">{feat}</span>
                 </div>
               ))}
             </div>
             <div className="mt-8">
               <Button onClick={() => onNavigate('features')} className="gap-2">
                 View All Features <ArrowRight size={16} />
               </Button>
             </div>
          </div>
          <div className="lg:w-1/2 bg-slate-50 p-8 rounded-3xl border border-slate-100 relative overflow-hidden">
             {/* Abstract UI representation */}
             <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-primary-200 rounded-full blur-3xl opacity-50"></div>
             <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-50"></div>
             
             <div className="relative z-10 bg-white rounded-xl shadow-lg p-6 mb-4 border border-slate-100">
               <div className="flex items-center justify-between mb-4">
                 <div className="flex items-center gap-3">
                   <div className="bg-green-100 p-2 rounded-lg text-green-600"><Activity size={20} /></div>
                   <div>
                     <div className="font-bold text-slate-800">Recommendation Engine</div>
                     <div className="text-xs text-slate-500">Real-time Analysis</div>
                   </div>
                 </div>
                 <div className="text-xs font-mono text-slate-400">ID: #8392</div>
               </div>
               <div className="space-y-2">
                 <div className="h-2 bg-slate-100 rounded-full w-3/4"></div>
                 <div className="h-2 bg-slate-100 rounded-full w-1/2"></div>
               </div>
               <div className="mt-4 flex gap-2">
                 <span className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded-md font-medium">High Susceptibility</span>
                 <span className="px-2 py-1 bg-slate-50 text-slate-500 text-xs rounded-md">Evidence Based</span>
               </div>
             </div>
             
             <div className="relative z-10 bg-white/80 backdrop-blur rounded-xl shadow p-4 border border-slate-100 flex items-center gap-4">
               <div className="bg-blue-100 p-2 rounded-lg text-blue-600"><Database size={20} /></div>
               <div>
                 <div className="font-bold text-slate-800">5,000+ Isolates</div>
                 <div className="text-xs text-slate-500">Processed from Buleleng Region</div>
               </div>
             </div>
          </div>
        </div>
      </Section>

      {/* Impact Alignment */}
      <Section className="bg-slate-900 text-white">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Aligned with Global Goals</h2>
          <p className="text-slate-400">
            Our strategic framework is directly mapped to international health standards and national action plans.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 flex items-start gap-4">
            <div className="bg-emerald-500/10 p-3 rounded-xl text-emerald-400">
              <Heart size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">SDG 3: Good Health</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Contributing to Target 3.d by strengthening early warning, risk reduction, and management of national and global health risks through improved surveillance.
              </p>
            </div>
          </div>
          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 flex items-start gap-4">
             <div className="bg-blue-500/10 p-3 rounded-xl text-blue-400">
              <Globe size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">WHO GAP-AMR</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Directly supporting Strategic Objective 2: Strengthen knowledge through surveillance and research, specifically in low-resource primary care settings.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-slate-50">
        <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-3xl p-12 text-center text-white shadow-2xl">
          <h2 className="text-3xl font-bold mb-6">Ready to Join the Fight Against AMR?</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8 text-lg">
            Join the pilot program in Singaraja and help us build a scalable model for national health security.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="white" size="lg" onClick={() => onNavigate('auth')}>
              Access the Platform
            </Button>
            <Button variant="outline" size="lg" onClick={() => onNavigate('pilot')}>
              View Pilot Details
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
};