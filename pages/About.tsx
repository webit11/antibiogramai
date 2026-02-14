import React from 'react';
import { Section } from '../components/Section';
import { Target, Lightbulb, Users, MapPin, BookOpen, GitMerge, Building2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="animate-fade-in pt-20">
      <div className="bg-slate-900 py-24 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/80 text-sm font-medium mb-6 backdrop-blur-sm border border-white/10">
            <MapPin size={14} /> Based in Singaraja, Bali, Indonesia
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About the Initiative</h1>
          <p className="text-blue-200 max-w-2xl mx-auto text-lg leading-relaxed">
            Antibiogram-AI is a research-driven initiative by Universitas Pendidikan Ganesha (Undiksha), bridging the gap between advanced artificial intelligence and practical primary healthcare.
          </p>
        </div>
      </div>

      <Section>
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
              <Building2 size={16} /> Institutional Foundation
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Led by Undiksha</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Headquartered at Universitas Pendidikan Ganesha in Singaraja, our team leverages the university's strong capabilities in computer science, education, and community service to address a critical public health challenge.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              We aim to reduce unnecessary antibiotic prescriptions, improve patient outcomes, and preserve the efficacy of life-saving medicines by making local resistance data accessible and actionable at the point of care in North Bali.
            </p>
          </div>
          <div className="bg-slate-100 rounded-3xl p-8 min-h-[300px] flex items-center justify-center relative overflow-hidden group">
             <img 
               src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=2080" 
               alt="Lab Research" 
               className="rounded-xl shadow-lg w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
             />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent rounded-xl"></div>
             <div className="absolute bottom-6 left-6 text-white font-bold text-xl">Evidence-Based Medicine</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 bg-slate-100 rounded-3xl p-8 min-h-[300px] flex items-center justify-center relative overflow-hidden group">
             <img 
               src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=2070" 
               alt="Digital Health" 
               className="rounded-xl shadow-lg w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
             />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent rounded-xl"></div>
             <div className="absolute bottom-6 left-6 text-white font-bold text-xl">Future-Ready Healthcare</div>
          </div>
          <div className="order-1 md:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-medium mb-4">
              <Lightbulb size={16} /> Our Vision
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">A Data-Driven Ecosystem</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              We envision a national health ecosystem where every antibiotic prescription is informed by real-time, hyper-local resistance surveillance data.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              By integrating siloed data from Buleleng's laboratories and clinics into a unified intelligence platform, we strive to build a resilient defense against the growing threat of drug-resistant infections.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-slate-50">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-700 text-sm font-medium mb-4">
            <GitMerge size={16} /> Collaboration
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Multidisciplinary Foundation</h2>
          <p className="text-slate-600 text-lg">
            Success requires the convergence of diverse fields. Our initiative is built on the collaboration of experts within Undiksha and external partners.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
           {[
             { 
               role: "Clinical Science", 
               icon: Users,
               desc: "Collaborating with RSUD Buleleng and local Puskesmas doctors to ensuring medical accuracy and clinical relevance." 
             },
             { 
               role: "Artificial Intelligence", 
               icon: BookOpen,
               desc: "Undiksha's Computer Science department developing robust algorithms for resistance prediction and pattern recognition." 
             },
             { 
               role: "Public Health Policy", 
               icon: MapPin,
               desc: "Policy strategists aligning the platform with National Action Plans and ensuring scalable implementation frameworks." 
             }
           ].map((area, i) => (
             <div key={i} className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 text-center hover:shadow-md transition-shadow">
               <div className="w-16 h-16 bg-primary-50 text-primary-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                 <area.icon size={32} />
               </div>
               <h3 className="font-bold text-xl text-slate-900 mb-3">{area.role}</h3>
               <p className="text-slate-600 leading-relaxed">{area.desc}</p>
             </div>
           ))}
        </div>
      </Section>
      
      <Section className="bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Strategic Roadmap</h2>
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-6 items-start text-left bg-slate-800 p-6 rounded-xl border border-slate-700">
               <div className="shrink-0 bg-primary-600 text-white px-4 py-1 rounded font-bold text-sm">Phase 1</div>
               <div>
                 <h3 className="font-bold text-lg text-white">Pilot Implementation (Singaraja)</h3>
                 <p className="text-slate-400 mt-2">Deploying in select Puskesmas in Buleleng Regency to validate the AI model and user interface with real-world clinical data from North Bali.</p>
               </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 items-start text-left bg-slate-800 p-6 rounded-xl border border-slate-700 opacity-80">
               <div className="shrink-0 bg-slate-600 text-white px-4 py-1 rounded font-bold text-sm">Phase 2</div>
               <div>
                 <h3 className="font-bold text-lg text-white">Regional Expansion</h3>
                 <p className="text-slate-400 mt-2">Expanding to cover the entire Bali province, integrating with provincial health databases and refining predictive models.</p>
               </div>
            </div>
             <div className="flex flex-col md:flex-row gap-6 items-start text-left bg-slate-800 p-6 rounded-xl border border-slate-700 opacity-60">
               <div className="shrink-0 bg-slate-700 text-white px-4 py-1 rounded font-bold text-sm">Phase 3</div>
               <div>
                 <h3 className="font-bold text-lg text-white">National Integration</h3>
                 <p className="text-slate-400 mt-2">Full integration with SATUSEHAT nationally, establishing Antibiogram-AI as a standard tool for antimicrobial stewardship across Indonesia.</p>
               </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};