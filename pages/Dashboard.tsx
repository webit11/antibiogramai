import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Microscope, 
  BarChart2, 
  FileText, 
  Settings, 
  LogOut, 
  Bell, 
  Search,
  Activity,
  User,
  AlertCircle,
  Download,
  Filter
} from 'lucide-react';

interface DashboardProps {
  onLogout: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onLogout }) => {
  const [activeView, setActiveView] = useState('overview');

  const navItems = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'recommendation', label: 'AI Recommendation Tool', icon: Microscope },
    { id: 'resistance', label: 'Resistance Dashboard', icon: BarChart2 },
    { id: 'reports', label: 'Reports & Analytics', icon: FileText },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="flex h-screen bg-slate-100 overflow-hidden font-sans">
      {/* Sidebar */}
      <aside className="w-72 bg-slate-900 text-slate-300 flex flex-col flex-shrink-0 transition-all duration-300">
        <div className="p-6 flex items-center gap-3 border-b border-slate-800">
           <div className="bg-primary-600 p-2 rounded-lg text-white">
             <Activity size={24} />
           </div>
           <div>
             <span className="block text-lg font-bold text-white tracking-tight">Antibiogram-AI</span>
             <span className="block text-xs text-slate-500 uppercase tracking-wider">Pilot Dashboard</span>
           </div>
        </div>

        <div className="px-6 py-4">
           <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Main Menu</p>
           <nav className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveView(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  activeView === item.id 
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-900/20' 
                    : 'hover:bg-slate-800 hover:text-white'
                }`}
              >
                <item.icon size={20} />
                <span className="font-medium text-sm">{item.label}</span>
              </button>
            ))}
           </nav>
        </div>

        <div className="mt-auto p-6 border-t border-slate-800">
          <button 
            onClick={onLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-slate-800 hover:text-red-300 transition-colors"
          >
            <LogOut size={20} />
            <span className="font-medium text-sm">Sign Out</span>
          </button>
          <div className="mt-4 pt-4 border-t border-slate-800/50 text-center">
            <p className="text-xs text-slate-600">© 2026 Antibiogram-AI Project.</p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden bg-slate-50">
        {/* Top Header */}
        <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-8 shadow-sm">
          <h2 className="text-xl font-bold text-slate-800 capitalize">
            {navItems.find(n => n.id === activeView)?.label || 'Dashboard'}
          </h2>
          
          <div className="flex items-center gap-6">
            <div className="relative hidden lg:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input type="text" placeholder="Search patient ID or record..." className="pl-10 pr-4 py-2 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 w-64 border border-transparent focus:bg-white transition-all" />
            </div>
            
            <button className="relative text-gray-500 hover:text-primary-600 transition-colors p-1 rounded-full hover:bg-gray-100">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
            </button>
            
            <div className="flex items-center gap-3 border-l border-gray-200 pl-6">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-slate-800">Dr. Sarah Wijaya</p>
                <p className="text-xs text-slate-500">Puskesmas Buleleng I</p>
              </div>
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center text-white shadow-md">
                <span className="font-bold text-sm">SW</span>
              </div>
            </div>
          </div>
        </header>

        {/* View Content */}
        <div className="flex-1 overflow-y-auto p-8">
          {activeView === 'overview' && (
            <div className="space-y-6 animate-fade-in">
              <div className="grid md:grid-cols-3 gap-6">
                 <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <p className="text-sm text-gray-500 mb-1 font-medium">Stewardship Score</p>
                        <h3 className="text-3xl font-bold text-slate-900">92/100</h3>
                      </div>
                      <div className="bg-green-100 text-green-600 p-2 rounded-xl"><Activity size={24} /></div>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-medium">
                      <span className="text-green-600 bg-green-50 px-2 py-0.5 rounded-full">+4%</span>
                      <span className="text-gray-400">vs last month</span>
                    </div>
                 </div>
                 <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <p className="text-sm text-gray-500 mb-1 font-medium">Alerts</p>
                        <h3 className="text-3xl font-bold text-slate-900">3</h3>
                      </div>
                      <div className="bg-orange-100 text-orange-600 p-2 rounded-xl"><AlertCircle size={24} /></div>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-medium">
                      <span className="text-orange-600 bg-orange-50 px-2 py-0.5 rounded-full">New</span>
                      <span className="text-gray-400">High resistance detected</span>
                    </div>
                 </div>
                 <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <p className="text-sm text-gray-500 mb-1 font-medium">Consultations</p>
                        <h3 className="text-3xl font-bold text-slate-900">148</h3>
                      </div>
                      <div className="bg-blue-100 text-blue-600 p-2 rounded-xl"><User size={24} /></div>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-medium">
                      <span className="text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">Today</span>
                      <span className="text-gray-400">Total sessions</span>
                    </div>
                 </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-6">
                 <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-96 flex flex-col">
                   <h3 className="font-bold text-slate-800 mb-6">Resistance Trend (E. coli)</h3>
                   <div className="flex-1 flex items-end justify-between gap-2 px-4 pb-4 border-b border-gray-100">
                      {[35, 42, 38, 45, 40, 55, 48, 60, 58, 65, 62, 70].map((h, i) => (
                        <div key={i} className="w-full bg-blue-100 rounded-t-sm hover:bg-blue-200 transition-colors relative group" style={{height: `${h}%`}}>
                           <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 text-xs text-slate-500 opacity-0 group-hover:opacity-100">{h}%</div>
                        </div>
                      ))}
                   </div>
                   <div className="flex justify-between text-xs text-gray-400 mt-2">
                     <span>Jan</span><span>Dec</span>
                   </div>
                 </div>
                 <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-96 overflow-y-auto">
                    <h3 className="font-bold text-slate-800 mb-4">Recent Alerts</h3>
                    <div className="space-y-4">
                       {[
                         { title: "High Resistance to Ciprofloxacin", location: "Singaraja District", time: "2h ago", type: "critical" },
                         { title: "Unusual increase in MRSA", location: "Sawan District", time: "5h ago", type: "warning" },
                         { title: "Monthly Data Sync Complete", location: "System", time: "1d ago", type: "info" }
                       ].map((alert, i) => (
                         <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                            <div className={`w-2 h-2 rounded-full mt-2 shrink-0 ${
                              alert.type === 'critical' ? 'bg-red-500' : alert.type === 'warning' ? 'bg-orange-500' : 'bg-blue-500'
                            }`}></div>
                            <div>
                               <h4 className="text-sm font-bold text-slate-900">{alert.title}</h4>
                               <p className="text-xs text-slate-500">{alert.location} • {alert.time}</p>
                            </div>
                         </div>
                       ))}
                    </div>
                 </div>
              </div>
            </div>
          )}

          {activeView === 'recommendation' && (
            <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
               <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                  <div className="border-b border-gray-100 pb-6 mb-6">
                    <h3 className="text-xl font-bold text-slate-900">Clinical Decision Support</h3>
                    <p className="text-slate-500 text-sm mt-1">Generate empirical prescription guidance based on Buleleng antibiograms.</p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Patient Diagnosis / Syndrome</label>
                        <select className="w-full px-4 py-3 border border-gray-200 bg-gray-50 rounded-xl focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all outline-none">
                          <option>Urinary Tract Infection (Uncomplicated)</option>
                          <option>Acute Otitis Media</option>
                          <option>Community Acquired Pneumonia</option>
                          <option>Skin & Soft Tissue Infection</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Patient Age Group</label>
                        <select className="w-full px-4 py-3 border border-gray-200 bg-gray-50 rounded-xl focus:ring-2 focus:ring-primary-500 focus:bg-white transition-all outline-none">
                          <option>Adult (18-65)</option>
                          <option>Child (2-12)</option>
                          <option>Geriatric (>65)</option>
                          <option>Infant (0-2)</option>
                        </select>
                      </div>
                      <button className="w-full bg-slate-900 text-white py-3 rounded-xl font-bold hover:bg-slate-800 transition-colors mt-4">
                        Analyze Local Data
                      </button>
                    </div>

                    <div className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100">
                      <div className="flex items-center gap-2 mb-4">
                         <div className="bg-blue-100 p-2 rounded-lg text-blue-600"><Microscope size={20} /></div>
                         <h4 className="font-bold text-blue-900">AI Analysis Result</h4>
                      </div>
                      
                      <div className="bg-white p-5 rounded-xl border border-green-200 shadow-sm mb-3 relative overflow-hidden">
                        <div className="absolute left-0 top-0 h-full w-1.5 bg-green-500"></div>
                        <div className="flex justify-between items-start mb-1">
                          <span className="font-bold text-lg text-slate-800">Nitrofurantoin</span>
                          <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">94% Susceptible</span>
                        </div>
                        <p className="text-xs text-slate-500 mb-2">Primary Recommendation</p>
                        <div className="text-xs text-slate-600 bg-slate-50 p-2 rounded">
                          Dosage: 100mg orally twice daily for 5 days.
                        </div>
                      </div>

                       <div className="bg-white p-5 rounded-xl border border-red-200 shadow-sm opacity-80 relative overflow-hidden">
                        <div className="absolute left-0 top-0 h-full w-1.5 bg-red-500"></div>
                        <div className="flex justify-between items-start mb-1">
                          <span className="font-bold text-lg text-slate-800">Ciprofloxacin</span>
                          <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-bold">22% Resistant</span>
                        </div>
                        <p className="text-xs text-slate-500">Not Recommended</p>
                         <div className="text-xs text-red-600 mt-1 font-medium">
                          High local resistance detected in Singaraja region (>20%).
                        </div>
                      </div>
                    </div>
                  </div>
               </div>
            </div>
          )}

          {activeView === 'resistance' && (
             <div className="space-y-6 animate-fade-in">
                <div className="flex justify-between items-center bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                   <h3 className="text-xl font-bold text-slate-800">Regional Resistance Map</h3>
                   <div className="flex gap-2">
                      <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50"><Filter size={16} /> Filters</button>
                      <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800"><Download size={16} /> Export Data</button>
                   </div>
                </div>
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm h-[600px] flex items-center justify-center relative overflow-hidden">
                   <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=2074" alt="Map Background" className="absolute inset-0 w-full h-full object-cover opacity-20" />
                   <div className="relative z-10 text-center">
                      <BarChart2 size={64} className="mx-auto text-slate-300 mb-4" />
                      <h4 className="text-xl font-bold text-slate-400">Interactive Map Visualization</h4>
                      <p className="text-slate-400 text-sm">Loading geospatial resistance layers for Buleleng Regency...</p>
                   </div>
                </div>
             </div>
          )}

           {activeView === 'reports' && (
             <div className="space-y-6 animate-fade-in">
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                   <h3 className="text-xl font-bold text-slate-800 mb-6">Generated Reports</h3>
                   <table className="w-full text-left">
                      <thead>
                        <tr className="border-b border-gray-100 text-xs text-gray-400 uppercase tracking-wider">
                          <th className="pb-3 font-semibold">Report Name</th>
                          <th className="pb-3 font-semibold">Date Generated</th>
                          <th className="pb-3 font-semibold">Type</th>
                          <th className="pb-3 font-semibold text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody className="text-sm">
                        {[
                          { name: "Monthly Stewardship Audit - Oct 2024", date: "Nov 01, 2024", type: "PDF" },
                          { name: "Q3 Cumulative Antibiogram - Singaraja", date: "Oct 15, 2024", type: "CSV" },
                          { name: "Resistance Alert Summary", date: "Oct 10, 2024", type: "PDF" },
                          { name: "Prescription Compliance Report", date: "Sep 30, 2024", type: "PDF" },
                        ].map((report, i) => (
                          <tr key={i} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                             <td className="py-4 font-medium text-slate-700">{report.name}</td>
                             <td className="py-4 text-slate-500">{report.date}</td>
                             <td className="py-4"><span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-bold">{report.type}</span></td>
                             <td className="py-4 text-right">
                               <button className="text-primary-600 font-bold hover:underline">Download</button>
                             </td>
                          </tr>
                        ))}
                      </tbody>
                   </table>
                </div>
             </div>
           )}

           {activeView === 'settings' && (
             <div className="max-w-2xl mx-auto animate-fade-in">
                <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm space-y-8">
                   <h3 className="text-xl font-bold text-slate-800 border-b border-gray-100 pb-4">Account Settings</h3>
                   
                   <div className="flex items-center gap-4">
                      <div className="w-20 h-20 bg-slate-200 rounded-full flex items-center justify-center text-slate-400">
                        <User size={32} />
                      </div>
                      <div>
                        <button className="bg-white border border-gray-300 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50">Change Avatar</button>
                      </div>
                   </div>

                   <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                         <div>
                           <label className="block text-sm font-bold text-slate-700 mb-1">First Name</label>
                           <input type="text" defaultValue="Sarah" className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm" />
                         </div>
                         <div>
                           <label className="block text-sm font-bold text-slate-700 mb-1">Last Name</label>
                           <input type="text" defaultValue="Wijaya" className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm" />
                         </div>
                      </div>
                      <div>
                         <label className="block text-sm font-bold text-slate-700 mb-1">Email Address</label>
                         <input type="email" defaultValue="sarah.w@puskesmas-buleleng1.id" className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm" />
                      </div>
                      <div>
                         <label className="block text-sm font-bold text-slate-700 mb-1">Notification Preferences</label>
                         <div className="space-y-2 mt-2">
                            <label className="flex items-center gap-2 text-sm text-slate-600">
                               <input type="checkbox" defaultChecked className="rounded text-primary-600" /> Email alerts for high resistance events
                            </label>
                            <label className="flex items-center gap-2 text-sm text-slate-600">
                               <input type="checkbox" defaultChecked className="rounded text-primary-600" /> Weekly summary reports
                            </label>
                         </div>
                      </div>
                   </div>
                   
                   <div className="pt-4 border-t border-gray-100 text-right">
                      <button className="bg-primary-600 text-white px-6 py-2 rounded-lg font-bold hover:bg-primary-700 transition-colors">Save Changes</button>
                   </div>
                </div>
             </div>
           )}
        </div>
      </main>
    </div>
  );
};