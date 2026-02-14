import React from 'react';
import { Activity, Linkedin, Twitter, Mail } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Activity className="h-6 w-6 text-primary-500" />
              <span className="text-xl font-bold text-white">Antibiogram-AI</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Pioneering precision surveillance to safeguard the future of antibiotics in Indonesia and beyond.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-4">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => onNavigate('solution')} className="hover:text-primary-400 transition-colors text-left">Solution</button></li>
              <li><button onClick={() => onNavigate('features')} className="hover:text-primary-400 transition-colors text-left">Key Features</button></li>
              <li><button onClick={() => onNavigate('pilot')} className="hover:text-primary-400 transition-colors text-left">Pilot Program</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><button className="hover:text-primary-400 transition-colors text-left">Research Brief</button></li>
              <li><button className="hover:text-primary-400 transition-colors text-left">AMR Statistics</button></li>
              <li><button className="hover:text-primary-400 transition-colors text-left">Partner Portal</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2"><Mail size={16} /> info@antibiogram.ai</li>
              <li className="flex items-center gap-4 mt-4">
                <button className="bg-slate-800 p-2 rounded-lg hover:bg-primary-600 transition-colors"><Linkedin size={18} /></button>
                <button className="bg-slate-800 p-2 rounded-lg hover:bg-primary-600 transition-colors"><Twitter size={18} /></button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>© 2026 Antibiogram-AI Project. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <button className="hover:text-white">Privacy Policy</button>
            <button className="hover:text-white">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
};