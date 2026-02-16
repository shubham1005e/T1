
import React, { useState } from 'react';
import { WorkflowPanel, PlatformDepartment } from '../types';

export const UtilityStrip: React.FC = () => (
  <div className="bg-black/40 backdrop-blur-sm text-slate-500 py-3 px-4 text-[10px] font-bold tracking-[0.2em] border-b border-white/5 uppercase">
    <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center">
      <div className="flex gap-6">
        <span className="flex items-center gap-2"><div className="w-1 h-1 bg-emerald-500 rounded-full animate-pulse"></div> ISO 42001 CERTIFIED</span>
        <span>SOC 2 TYPE II</span>
      </div>
      <div className="hidden md:flex gap-8">
        <span>1,700+ Global Partners</span>
        <span>$43B+ Transaction Volume</span>
      </div>
    </div>
  </div>
);

export const Header: React.FC = () => (
  <header className="sticky top-0 z-50 bg-[#020617]/80 backdrop-blur-xl border-b border-white/5">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-20">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-black text-white italic group-hover:scale-110 transition-transform">T</div>
          <span className="text-xl font-black tracking-tighter text-white">tekion</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-10 text-[13px] font-bold text-slate-400">
          <a href="#" className="hover:text-white transition-colors">Platform</a>
          <a href="#" className="flex items-center gap-2 text-white">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
            T1 Intelligence
          </a>
          <a href="#" className="hover:text-white transition-colors">Enterprise</a>
          <a href="#" className="hover:text-white transition-colors">Global</a>
        </nav>

        <div className="flex items-center gap-6">
          <button className="hidden sm:block text-[13px] font-bold text-slate-400 hover:text-white transition-colors">Login</button>
          <button className="bg-white text-black px-6 py-2.5 rounded-full text-[13px] font-black hover:bg-blue-500 hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  </header>
);

export const Hero: React.FC = () => (
  <section className="relative pt-24 pb-32 overflow-hidden bg-grid">
    <div className="glow-blob w-[500px] h-[500px] bg-blue-600 top-[-10%] left-[-10%]"></div>
    <div className="glow-blob w-[400px] h-[400px] bg-purple-600 bottom-[-10%] right-[-10%]"></div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-[11px] font-black tracking-widest text-blue-400 mb-10 uppercase animate-fade-in">
        <i className="fa-solid fa-sparkles"></i> The AI-Native Revolution
      </div>
      
      <h1 className="text-6xl md:text-8xl font-black tracking-tighter gradient-heading leading-[0.95] mb-10 max-w-5xl mx-auto">
        The OS for the <br />
        <span className="text-blue-500">Autonomous Dealership.</span>
      </h1>
      
      <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed font-medium">
        Replace disconnected legacy software with one unified, AI-native operating system that runs every department from floor to back-office.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-24">
        <button className="blue-gradient text-white px-10 py-5 rounded-full font-black text-lg shadow-[0_0_40px_rgba(59,130,246,0.4)] hover:shadow-[0_0_60px_rgba(59,130,246,0.6)] transition-all">
          Request Early Access
        </button>
        <button className="glass-card text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/5 transition-all">
          Watch Demo
        </button>
      </div>

      {/* Floating UI Elements */}
      <div className="relative max-w-5xl mx-auto group">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-[2rem] opacity-20 blur-xl group-hover:opacity-40 transition-opacity"></div>
        <div className="relative glass-card rounded-[2.5rem] p-4 lg:p-8 overflow-hidden">
          <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-6">
            <div className="flex gap-4 items-center">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
              </div>
              <div className="h-4 w-px bg-white/10 mx-2"></div>
              <div className="text-[10px] font-black tracking-widest text-slate-500 uppercase">T1 CORE INTERFACE</div>
            </div>
            <div className="text-[10px] font-black text-blue-500 bg-blue-500/10 px-3 py-1 rounded-full tracking-widest uppercase">Live Intelligence</div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="col-span-2 space-y-6">
              <div className="bg-white/5 rounded-3xl p-6 border border-white/5 flex gap-4 text-left">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex-shrink-0 flex items-center justify-center font-black text-[10px]">T1</div>
                <div>
                  <div className="text-white font-bold mb-2">Analyzing: Service Center Load</div>
                  <div className="text-slate-400 text-sm leading-relaxed">
                    Based on current tech availability and upcoming appointments, I've flagged 4 priority slots for high-margin recall work. Total revenue opportunity: <span className="text-emerald-400 font-bold">$4,280</span>.
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-900/40 p-5 rounded-2xl border border-white/5 text-left">
                  <div className="text-[10px] font-bold text-slate-500 mb-2 uppercase">Parts Inventory</div>
                  <div className="text-lg font-black text-white">94% Efficiency</div>
                  <div className="w-full bg-white/10 h-1 rounded-full mt-3 overflow-hidden">
                    <div className="bg-blue-500 h-full w-[94%]"></div>
                  </div>
                </div>
                <div className="bg-slate-900/40 p-5 rounded-2xl border border-white/5 text-left">
                  <div className="text-[10px] font-bold text-slate-500 mb-2 uppercase">Active Leads</div>
                  <div className="text-lg font-black text-white">12 High Value</div>
                  <div className="flex gap-1 mt-3">
                    <div className="h-1 flex-1 bg-blue-500 rounded-full"></div>
                    <div className="h-1 flex-1 bg-blue-500 rounded-full"></div>
                    <div className="h-1 flex-1 bg-white/10 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-blue-600/10 rounded-3xl border border-blue-500/20 p-6 flex flex-col justify-center items-center text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl shadow-[0_0_30px_rgba(59,130,246,0.5)] mb-6 flex items-center justify-center text-3xl">
                <i className="fa-solid fa-robot"></i>
              </div>
              <div className="text-sm font-bold text-white mb-2 italic">"T1 is processing..."</div>
              <p className="text-xs text-blue-200/60 leading-relaxed uppercase tracking-tighter">
                Neural processing active across <br /> 14 departmental nodes
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const MetricsBar: React.FC = () => (
  <section className="bg-black py-20 border-y border-white/5">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
        {[
          { label: "Rev / Rooftop", value: "+$36K", sub: "Monthly average" },
          { label: "PVR Increase", value: "31%", sub: "Sales & F&I" },
          { label: "Response Speed", value: "41%", sub: "Lead conversion" },
          { label: "Efficiency", value: "195h", sub: "Manual labor saved" }
        ].map((item, idx) => (
          <div key={idx} className="group cursor-default">
            <div className="text-[10px] font-black tracking-widest text-slate-500 uppercase mb-3">{item.label}</div>
            <div className="text-5xl font-black text-white tracking-tighter group-hover:text-blue-500 transition-colors">{item.value}</div>
            <div className="text-xs font-bold text-slate-600 mt-2">{item.sub}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const WORKFLOWS: WorkflowPanel[] = [
  {
    id: 'intelligence',
    label: 'T1 Intelligence',
    visualTitle: 'Autonomous Decision Engine',
    caption: 'T1 doesn\'t just suggest actions. It identifies revenue leakage and proactively adjusts workflows.',
    steps: [
      { title: 'Predictive Demand', description: 'Forecasts inventory needs based on hyper-local registration data.', icon: 'fa-microchip' },
      { title: 'Dynamic Pricing', description: 'Adjusts service rates in real-time based on bay occupancy.', icon: 'fa-bolt-lightning' },
      { title: 'Neural CRM', description: 'Scores customer sentiment during conversations to prioritize outreach.', icon: 'fa-brain' }
    ]
  },
  {
    id: 'experience',
    label: 'Unified Experience',
    visualTitle: 'Frictionless Modern Retail',
    caption: 'One consistent interface from the first website click to the service hand-off.',
    steps: [
      { title: 'Digital Signature', description: 'Zero-friction document signing across all departments.', icon: 'fa-signature' },
      { title: 'Spatial Showroom', description: 'Seamlessly transition customers from web to showroom in seconds.', icon: 'fa-eye' },
      { title: 'Real-time Tracking', description: 'Uber-like transparency for the service journey.', icon: 'fa-map-pin' }
    ]
  }
];

export const WorkflowSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('intelligence');
  const current = WORKFLOWS.find(w => w.id === activeTab) || WORKFLOWS[0];

  return (
    <section className="py-32 bg-[#020617] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-5xl font-black tracking-tighter text-white mb-6">Built different. <br /><span className="text-slate-500">Operates differently.</span></h2>
          </div>
          <div className="flex bg-white/5 p-1 rounded-full border border-white/10 backdrop-blur-md">
            {WORKFLOWS.map((w) => (
              <button
                key={w.id}
                onClick={() => setActiveTab(w.id)}
                className={`px-8 py-3 rounded-full text-xs font-black tracking-widest uppercase transition-all ${
                  activeTab === w.id ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'text-slate-500 hover:text-white'
                }`}
              >
                {w.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            {current.steps.map((step, idx) => (
              <div key={idx} className="group flex gap-8 p-6 rounded-3xl hover:bg-white/5 border border-transparent hover:border-white/5 transition-all">
                <div className="w-16 h-16 rounded-2xl bg-blue-600/10 border border-blue-600/20 flex items-center justify-center text-2xl text-blue-500 group-hover:scale-110 transition-transform">
                  <i className={`fa-solid ${step.icon}`}></i>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                  <p className="text-slate-400 leading-relaxed text-sm font-medium">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            <div className="absolute -inset-10 bg-blue-600/20 blur-[100px] rounded-full"></div>
            <div className="relative glass-card aspect-square rounded-[3rem] p-12 flex flex-col items-center justify-center">
              <div className="w-full h-full border-2 border-dashed border-white/10 rounded-full flex items-center justify-center animate-[spin_20s_linear_infinite]">
                 <div className="w-3/4 h-3/4 border-2 border-dashed border-white/10 rounded-full flex items-center justify-center animate-[spin_15s_linear_infinite_reverse]">
                   <div className="w-1/2 h-1/2 border-2 border-dashed border-white/10 rounded-full"></div>
                 </div>
              </div>
              <div className="absolute text-center p-8">
                 <div className="text-blue-500 text-4xl mb-4"><i className="fa-solid fa-atom animate-pulse"></i></div>
                 <div className="text-white font-black text-xl mb-2 tracking-tighter">Neural Core Active</div>
                 <div className="text-slate-500 text-xs font-bold uppercase tracking-widest">Processing Platform Context</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const ArchitectureComparison: React.FC = () => (
  <section className="py-32 bg-black overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16">
        <div className="relative p-12 rounded-[3rem] glass-card overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 text-8xl"><i className="fa-solid fa-box-archive"></i></div>
          <h3 className="text-slate-500 font-black tracking-widest uppercase mb-10 text-xs">Legacy Stacks</h3>
          <ul className="space-y-6">
            {['Bolted-on AI wrappers', 'Fragmented data silos', 'Scheduled downtime updates', 'Departmental friction points', 'Passive suggestion tools'].map((item, i) => (
              <li key={i} className="flex gap-4 items-center text-slate-500 font-medium">
                <i className="fa-solid fa-circle-xmark text-slate-800"></i> {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative p-12 rounded-[3rem] border border-blue-600/30 bg-blue-600/5 overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-20 text-8xl text-blue-500"><i className="fa-solid fa-sparkles"></i></div>
          <h3 className="text-blue-500 font-black tracking-widest uppercase mb-10 text-xs">Tekion AI-Native</h3>
          <ul className="space-y-6">
            {['Native neural architecture', 'Single source of truth', 'Seamless 8x/day live updates', 'Cross-departmental flow', 'Autonomous acting agents'].map((item, i) => (
              <li key={i} className="flex gap-4 items-center text-white font-bold">
                <i className="fa-solid fa-circle-check text-blue-500"></i> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export const TrustSection: React.FC = () => (
  <section className="py-32 bg-[#020617]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-24">
        <div className="text-[10px] font-black tracking-[0.4em] text-blue-500 uppercase mb-8">Trusted by the Global Giants</div>
        <div className="flex flex-wrap justify-center items-center gap-16 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
           {['GM', 'BMW', 'TOYOTA', 'VOLVO', 'HYUNDAI', 'KIA'].map(brand => (
             <span key={brand} className="text-3xl font-black italic tracking-tighter text-white">{brand}</span>
           ))}
        </div>
      </div>
      
      <div className="grid md:grid-cols-3 gap-12">
        {[
          { icon: 'fa-shield-halved', title: 'Military Grade', desc: 'SOC 2 Type II, ISO 27001, and advanced encryption as standard.' },
          { icon: 'fa-microchip', title: 'Live Evolution', desc: '8 updates a day with zero system downtime. Ever.' },
          { icon: 'fa-bolt', title: 'Instant ROI', desc: 'Our Service module pays for itself in less than 45 days.' }
        ].map((item, i) => (
          <div key={i} className="p-10 rounded-[2.5rem] glass-card text-center hover:-translate-y-2 transition-transform">
             <div className="w-16 h-16 bg-blue-600/10 rounded-2xl mx-auto mb-8 flex items-center justify-center text-2xl text-blue-500">
                <i className={`fa-solid ${item.icon}`}></i>
             </div>
             <h4 className="text-xl font-bold text-white mb-4">{item.title}</h4>
             <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const PlatformMap: React.FC = () => (
  <section className="py-32 bg-black relative overflow-hidden">
    <div className="glow-blob w-[800px] h-[800px] bg-blue-900/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center mb-24">
        <h2 className="text-5xl font-black tracking-tighter text-white mb-6">One OS. Infinite scale.</h2>
        <p className="text-slate-500 max-w-xl mx-auto">Every departmental tool is natively built into the same neural core. No integrations required.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {[
          { name: 'CRM', icon: 'fa-users', col: 'col-span-1 md:col-span-2' },
          { name: 'Service', icon: 'fa-screwdriver-wrench', col: 'col-span-1' },
          { name: 'Parts', icon: 'fa-gears', col: 'col-span-1' },
          { name: 'Accounting', icon: 'fa-calculator', col: 'col-span-1 md:col-span-3' },
          { name: 'F&I', icon: 'fa-file-invoice-dollar', col: 'col-span-1' },
          { name: 'Sales', icon: 'fa-car', col: 'col-span-1' },
          { name: 'T1 AI', icon: 'fa-sparkles', col: 'col-span-1 md:col-span-5', highlight: true }
        ].map((item, i) => (
          <div key={i} className={`${item.col} p-8 rounded-3xl ${item.highlight ? 'bg-blue-600 text-white shadow-[0_0_40px_rgba(59,130,246,0.3)]' : 'glass-card text-slate-400'} flex flex-col items-center justify-center gap-4 group cursor-pointer hover:scale-[1.02] transition-all`}>
            <i className={`fa-solid ${item.icon} text-2xl group-hover:scale-110 transition-transform`}></i>
            <span className="text-[11px] font-black tracking-[0.2em] uppercase">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const CustomerProof: React.FC = () => (
  <section className="py-32 bg-[#020617]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-12 rounded-[3rem] glass-card border-l-4 border-l-blue-600">
           <div className="text-blue-500 font-black mb-8">CASE 01 // DOLAN AUTO</div>
           <blockquote className="text-2xl font-medium text-white mb-10 leading-tight">
             "We aren't just faster—we are smarter. Tekion isn't a vendor, they are the foundation of our next 20 years."
           </blockquote>
           <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-800 rounded-full"></div>
              <div>
                 <div className="text-white font-bold">Tom Dolan</div>
                 <div className="text-slate-500 text-xs font-bold uppercase tracking-widest">CEO, Dolan Auto Group</div>
              </div>
           </div>
        </div>
        <div className="p-12 rounded-[3rem] glass-card border-l-4 border-l-purple-600">
           <div className="text-purple-500 font-black mb-8">CASE 02 // SANDY SANSING</div>
           <blockquote className="text-2xl font-medium text-white mb-10 leading-tight">
             "The autonomous service scheduling alone paid for the entire platform in the first 60 days."
           </blockquote>
           <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-800 rounded-full"></div>
              <div>
                 <div className="text-white font-bold">Sandy Sansing</div>
                 <div className="text-slate-500 text-xs font-bold uppercase tracking-widest">President</div>
              </div>
           </div>
        </div>
      </div>
    </div>
  </section>
);

export const FounderStory: React.FC = () => (
  <section className="py-32 bg-black">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-20 items-center">
      <div className="relative group">
         <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-[3rem] opacity-20 blur-2xl group-hover:opacity-40 transition-opacity"></div>
         <div className="aspect-square bg-slate-900 rounded-[3rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 relative">
            <img src="https://picsum.photos/1000/1000?grayscale" alt="Founder" className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-black to-transparent">
               <div className="text-white font-black text-3xl italic tracking-tighter mb-1">Jay Vijayan</div>
               <div className="text-blue-500 text-xs font-black tracking-widest uppercase">Former CIO, Tesla // Founder, Tekion</div>
            </div>
         </div>
      </div>
      <div>
         <h2 className="text-5xl font-black tracking-tighter text-white mb-10 leading-[0.95]">From building Warp at Tesla <br /><span className="text-slate-500">to re-inventing Automotive.</span></h2>
         <p className="text-slate-400 text-lg leading-relaxed mb-8">
           Jay Vijayan saw the inefficiency of legacy dealer software and decided to build a ground-up platform that handles enterprise scale with consumer-grade simplicity.
         </p>
         <div className="flex gap-4">
            <button className="px-8 py-4 bg-white text-black rounded-full font-black text-xs tracking-widest uppercase hover:bg-blue-600 hover:text-white transition-all">Read the Vision</button>
            <button className="px-8 py-4 glass-card text-white rounded-full font-black text-xs tracking-widest uppercase hover:bg-white/10 transition-all">Leadership</button>
         </div>
      </div>
    </div>
  </section>
);

export const MigrationCTA: React.FC = () => (
  <section className="py-40 bg-[#020617] relative overflow-hidden">
    <div className="glow-blob w-[1200px] h-[600px] bg-blue-600/10 bottom-[-20%] left-1/2 -translate-x-1/2"></div>
    <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
      <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-12">The last DMS <br /> you'll ever need.</h2>
      <p className="text-xl text-slate-400 mb-16 max-w-2xl mx-auto">Migration doesn't have to be a nightmare. Our dedicated conversion specialists handle the heavy lifting, ensuring zero data loss and day-one readiness.</p>
      <button className="blue-gradient text-white px-16 py-6 rounded-full font-black text-xl shadow-[0_0_60px_rgba(59,130,246,0.3)] hover:scale-105 transition-all">
        Build Your OS Blueprint
      </button>
    </div>
  </section>
);

export const Footer: React.FC = () => (
  <footer className="bg-black py-20 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
        <div>
          <div className="text-xl font-black text-white tracking-tighter mb-8">tekion<span className="text-blue-600">.ai</span></div>
          <p className="text-slate-500 text-sm leading-relaxed mb-10 max-w-xs">The AI-native Operating System for the modern world of automotive retail.</p>
          <div className="flex gap-4 text-slate-600">
             <i className="fa-brands fa-linkedin hover:text-white transition-colors cursor-pointer"></i>
             <i className="fa-brands fa-x-twitter hover:text-white transition-colors cursor-pointer"></i>
             <i className="fa-brands fa-youtube hover:text-white transition-colors cursor-pointer"></i>
          </div>
        </div>
        <div>
          <h5 className="text-white font-black text-[10px] tracking-widest uppercase mb-8">Platform</h5>
          <ul className="space-y-4 text-sm text-slate-500">
            <li className="hover:text-white transition-colors cursor-pointer">T1 Intelligence</li>
            <li className="hover:text-white transition-colors cursor-pointer">Sales & CRM</li>
            <li className="hover:text-white transition-colors cursor-pointer">Service Center</li>
            <li className="hover:text-white transition-colors cursor-pointer">F&I Desking</li>
          </ul>
        </div>
        <div>
          <h5 className="text-white font-black text-[10px] tracking-widest uppercase mb-8">Enterprise</h5>
          <ul className="space-y-4 text-sm text-slate-500">
            <li className="hover:text-white transition-colors cursor-pointer">Multi-rooftop Ops</li>
            <li className="hover:text-white transition-colors cursor-pointer">OEM Partnerships</li>
            <li className="hover:text-white transition-colors cursor-pointer">Data Lake</li>
            <li className="hover:text-white transition-colors cursor-pointer">Security Core</li>
          </ul>
        </div>
        <div>
          <h5 className="text-white font-black text-[10px] tracking-widest uppercase mb-8">Company</h5>
          <ul className="space-y-4 text-sm text-slate-500">
            <li className="hover:text-white transition-colors cursor-pointer">About Us</li>
            <li className="hover:text-white transition-colors cursor-pointer">Careers</li>
            <li className="hover:text-white transition-colors cursor-pointer">Press Center</li>
            <li className="hover:text-white transition-colors cursor-pointer">Security Portal</li>
          </ul>
        </div>
      </div>
      
      <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-[9px] font-black text-slate-700 tracking-[0.3em] uppercase flex flex-wrap gap-8">
           <span>ISO 42001</span>
           <span>SOC 2 Type II</span>
           <span>ISO 27001</span>
        </div>
        <div className="text-[11px] text-slate-600 font-bold uppercase tracking-widest">
           © 2026 Tekion Corp. // The Future of Automotive
        </div>
      </div>
    </div>
  </footer>
);
