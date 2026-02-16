
import React, { useState } from 'react';
import { WorkflowPanel, PlatformDepartment } from '../types';

export const UtilityStrip: React.FC = () => (
  <div className="bg-slate-950 text-slate-400 py-2.5 px-4 text-[11px] md:text-xs font-medium border-b border-slate-800">
    <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-4 md:gap-8 tracking-wide">
      <span>ISO/IEC 42001 CERTIFIED</span>
      <span className="text-slate-700">•</span>
      <span>1,700+ DEALERSHIPS</span>
      <span className="text-slate-700">•</span>
      <span>$43B+ TRANSACTIONS PROCESSED</span>
      <span className="text-slate-700">•</span>
      <span>SOC 1 & SOC 2 TYPE II</span>
    </div>
  </div>
);

export const Header: React.FC = () => (
  <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-20">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-black tracking-tighter text-slate-900">tekion<span className="text-blue-600">.ai</span></span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-10 text-sm font-semibold text-slate-600">
          <a href="#" className="hover:text-blue-600 transition-colors">Platform</a>
          <a href="#" className="hover:text-blue-600 transition-colors flex items-center gap-1.5">
            AI <span className="bg-blue-100 text-blue-700 text-[10px] px-1.5 py-0.5 rounded-full">New</span>
          </a>
          <a href="#" className="hover:text-blue-600 transition-colors">Solutions</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Customers</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Company</a>
        </nav>

        <div className="flex items-center gap-4">
          <button className="hidden sm:block text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">Sign In</button>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg shadow-blue-500/25 hover:bg-blue-700 hover:-translate-y-0.5 transition-all">
            See It In Action
          </button>
        </div>
      </div>
    </div>
  </header>
);

export const Hero: React.FC = () => (
  <section className="relative pt-16 pb-24 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
      <div className="space-y-8">
        <div>
          <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-sm font-bold rounded-full mb-6 uppercase tracking-wider">
            The AI-Native Operating System
          </span>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
            The platform that <br />
            <span className="gradient-text">runs automotive retail.</span>
          </h1>
        </div>
        <p className="text-xl text-slate-500 leading-relaxed max-w-lg">
          One AI-native OS. Every department — Sales, Service, F&I, Parts, Accounting. 
          Intelligence that doesn't just advise. <strong>It acts.</strong>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <button className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/10">
            See It In Action
          </button>
          <button className="flex items-center justify-center gap-2 text-slate-600 font-bold px-8 py-4 rounded-full border border-slate-200 hover:bg-slate-50 transition-all">
            <i className="fa-solid fa-play text-blue-600"></i>
            Watch the NADA Keynote
          </button>
        </div>
      </div>

      <div className="relative">
        <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 to-indigo-100 rounded-[2.5rem] blur-3xl opacity-50 -z-10"></div>
        <div className="bg-slate-950 rounded-2xl shadow-2xl overflow-hidden border border-slate-800 p-6 min-h-[460px] flex flex-col">
          <div className="flex items-center gap-2 mb-6 border-b border-slate-800 pb-4">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white text-xs font-bold">T1</div>
            <div>
              <div className="text-white text-sm font-bold">T1 Interface</div>
              <div className="text-slate-500 text-[10px] uppercase tracking-widest font-bold">Active Assistant</div>
            </div>
          </div>
          
          <div className="flex-1 space-y-6">
            <div className="flex justify-end">
              <div className="bg-slate-800 text-slate-200 px-4 py-3 rounded-2xl rounded-tr-none text-sm max-w-[80%]">
                Customer is asking for a service appointment for their 2022 BMW X5. Check history and availability.
              </div>
            </div>
            <div className="flex justify-start items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-600 flex-shrink-0 flex items-center justify-center text-[10px] font-bold text-white uppercase">T1</div>
              <div className="space-y-3">
                <div className="bg-blue-600/10 border border-blue-500/20 text-slate-200 px-4 py-3 rounded-2xl rounded-tl-none text-sm max-w-[90%]">
                  Analyzing history... Customer is due for a 30k mile service. I've located the vehicle in CRM. 
                  <br /><br />
                  <span className="text-blue-400 font-medium">Auto-triggering:</span> Checking Parts for brake pads (90% match for this mileage). 
                </div>
                <div className="flex gap-2">
                  <div className="bg-slate-900 border border-slate-800 p-3 rounded-xl flex-1">
                    <div className="text-[10px] text-slate-500 font-bold uppercase mb-1">Parts Status</div>
                    <div className="text-xs text-white flex items-center gap-2">
                      <i className="fa-solid fa-check text-emerald-400"></i> In Stock (Aisle 4)
                    </div>
                  </div>
                  <div className="bg-slate-900 border border-slate-800 p-3 rounded-xl flex-1">
                    <div className="text-[10px] text-slate-500 font-bold uppercase mb-1">Service Bay</div>
                    <div className="text-xs text-white">Thursday, 9:00 AM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 pt-4 border-t border-slate-800 flex items-center gap-3">
            <div className="bg-slate-900 border border-slate-800 rounded-full flex-1 px-4 py-2 text-slate-500 text-sm">
              Type to message T1...
            </div>
            <button className="bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-white">
              <i className="fa-solid fa-paper-plane text-xs"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const MetricsBar: React.FC = () => (
  <section className="bg-slate-950 py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
        {[
          { label: "Additional service revenue per rooftop", value: "$36K/mo" },
          { label: "PVR increase across Sales & F&I", value: "31%" },
          { label: "Faster lead response time", value: "41%" },
          { label: "Monthly unapplied labor reduced", value: "195 hrs" }
        ].map((item, idx) => (
          <div key={idx} className="text-center md:text-left space-y-2 border-l border-slate-800 pl-6 first:border-0">
            <div className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight">{item.value}</div>
            <div className="text-slate-400 text-sm font-medium leading-tight max-w-[160px]">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const WORKFLOWS: WorkflowPanel[] = [
  {
    id: 'service',
    label: 'Service Department',
    visualTitle: 'Autonomous Service Scheduling',
    caption: 'From customer text to scheduled appointment with repair recommendations — handled autonomously.',
    steps: [
      { title: 'Customer texts dealership', description: 'AI reads message, identifies vehicle from CRM, checks service history.', icon: 'fa-message' },
      { title: 'AI recommends repairs', description: 'Recommends likely repairs based on vehicle data + mileage patterns.', icon: 'fa-wrench' },
      { title: 'Smart Bay Scheduling', description: 'Schedules appointment in open bay, assigns technician based on skill match.', icon: 'fa-calendar-check' },
      { title: 'Advisor Summary', description: 'Advisor gets summary card — ready before customer arrives.', icon: 'fa-user-check' }
    ]
  },
  {
    id: 'sales',
    label: 'Sales Floor',
    visualTitle: 'Frictionless Sales Lifecycle',
    caption: '41% faster response. Complete customer context. AI working across CRM, inventory, and F&I in one interaction.',
    steps: [
      { title: 'Lead Ingestion', description: 'AI scores lead, summarizes browsing history + trade-in data.', icon: 'fa-bolt' },
      { title: 'Personalized Draft', description: 'AI drafts personalized response in 30 seconds.', icon: 'fa-pen-nib' },
      { title: 'Arrival Context', description: 'Salesperson sees full context on one screen when customer arrives.', icon: 'fa-id-card' },
      { title: 'F&I Recommendations', description: 'Products recommended based on customer profile automatically.', icon: 'fa-chart-pie' }
    ]
  },
  {
    id: 'office',
    label: 'Back Office',
    visualTitle: 'Automated Accounting & Ops',
    caption: 'From 3 hours of daily reconciliation to 5 minutes. One source of truth across every rooftop.',
    steps: [
      { title: 'End-of-Day Reconciliation', description: 'AI reconciles payments automatically across the platform.', icon: 'fa-coins' },
      { title: 'Exception Flagging', description: 'Flags anomalies for human review, augmenting your controllers.', icon: 'fa-flag' },
      { title: 'Real-time P&L', description: 'Visibility across all rooftops from a single dashboard.', icon: 'fa-chart-line' },
      { title: 'OEM Integration', description: 'Direct data flow with no manual re-entry required.', icon: 'fa-shuffle' }
    ]
  }
];

export const WorkflowSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('service');
  const current = WORKFLOWS.find(w => w.id === activeTab) || WORKFLOWS[0];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-6">AI that runs your dealership. Not another tool to learn.</h2>
          <div className="flex justify-center p-1 bg-slate-100 rounded-full max-w-2xl mx-auto">
            {WORKFLOWS.map((w) => (
              <button
                key={w.id}
                onClick={() => setActiveTab(w.id)}
                className={`flex-1 px-6 py-3 rounded-full text-sm font-bold transition-all ${
                  activeTab === w.id ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                {w.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[500px]">
          <div className="space-y-8">
            {current.steps.map((step, idx) => (
              <div key={idx} className="flex gap-6 group">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <i className={`fa-solid ${step.icon}`}></i>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">{step.title}</h4>
                  <p className="text-slate-500 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-slate-50 rounded-[2rem] border border-slate-200 p-8 lg:p-12 relative overflow-hidden flex flex-col items-center justify-center text-center shadow-inner">
            <div className="absolute top-0 left-0 w-full h-1 bg-blue-600"></div>
            <div className="text-slate-400 text-xs font-black uppercase tracking-[0.2em] mb-6">Platform Workflow Visual</div>
            <div className="w-full max-w-md aspect-square bg-white border border-slate-200 rounded-2xl shadow-xl flex flex-col p-6 animate-pulse">
               <div className="flex justify-between items-center mb-6">
                 <div className="w-1/3 h-4 bg-slate-100 rounded-full"></div>
                 <div className="w-8 h-8 rounded-full bg-blue-100"></div>
               </div>
               <div className="space-y-4">
                 <div className="w-full h-3 bg-slate-50 rounded-full"></div>
                 <div className="w-full h-3 bg-slate-50 rounded-full"></div>
                 <div className="w-2/3 h-3 bg-slate-50 rounded-full"></div>
               </div>
               <div className="mt-auto grid grid-cols-2 gap-4">
                 <div className="h-20 bg-slate-100 rounded-xl"></div>
                 <div className="h-20 bg-slate-100 rounded-xl"></div>
               </div>
            </div>
            <p className="mt-8 text-sm font-semibold text-slate-600 max-w-sm italic">
              "{current.caption}"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export const ArchitectureComparison: React.FC = () => (
  <section className="py-24 bg-slate-50 border-y border-slate-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center mb-20">
        <h2 className="text-4xl font-extrabold text-slate-900 mb-6 italic">AI-native means something specific.</h2>
        <p className="text-lg text-slate-500">You can't retrofit intelligence onto a foundation that was never designed for it.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-0 border border-slate-200 rounded-3xl overflow-hidden shadow-2xl shadow-slate-200">
        <div className="p-10 lg:p-16 bg-white border-r border-slate-200">
          <h3 className="text-2xl font-bold text-slate-400 mb-10 flex items-center gap-3">
            <i className="fa-solid fa-circle-xmark text-slate-300"></i>
            What Others Call "AI"
          </h3>
          <ul className="space-y-8">
            {[
              "AI features bolted onto 40-year-old architecture",
              "Department-specific AI tools that don't talk to each other",
              "Your data replicated to third-party AI models",
              "Quarterly software updates with scheduled downtime",
              "\"AI-powered\" labels on existing features",
              "AI that suggests what to do"
            ].map((item, idx) => (
              <li key={idx} className="flex gap-4 text-slate-500 font-medium">
                <span className="text-slate-300 text-xs mt-1">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="p-10 lg:p-16 bg-slate-950">
          <h3 className="text-2xl font-bold text-blue-500 mb-10 flex items-center gap-3">
            <i className="fa-solid fa-circle-check text-blue-500"></i>
            What Tekion Built
          </h3>
          <ul className="space-y-8">
            {[
              "AI embedded into workflow primitives from day one",
              "One AI that reasons across every department",
              "AI trained on your unified platform data — stays yours",
              "8 updates per day. Zero downtime.",
              "ISO/IEC 42001 certified AI governance",
              "AI that does it"
            ].map((item, idx) => (
              <li key={idx} className="flex gap-4 text-white font-bold">
                <span className="text-blue-500 text-xs mt-1">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export const TrustSection: React.FC = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center">
        <div className="flex flex-wrap justify-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-500 mb-20">
          {['GM', 'BMW', 'Toyota', 'Kia', 'Hyundai', 'Asbury'].map((logo, idx) => (
            <div key={idx} className="text-2xl font-black text-slate-900 tracking-tighter uppercase">{logo}</div>
          ))}
        </div>

        <div className="max-w-4xl text-center mb-20">
          <blockquote className="text-3xl md:text-4xl font-medium text-slate-900 leading-tight mb-8">
            "Focus more on customers, less on manual processes. Tekion's AI-native approach changed how we think about the dealership business."
          </blockquote>
          <cite className="text-slate-500 font-bold not-italic">— EWING AUTOMOTIVE GROUP</cite>
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {['SOC 1 TYPE II', 'SOC 2 TYPE II', 'ISO 27001', 'ISO 27701', 'ISO/IEC 42001'].map((badge, idx) => (
            <div key={idx} className="px-4 py-2 border-2 border-slate-100 rounded-lg text-[10px] font-black text-slate-400 tracking-widest text-center">
              {badge}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const PLATFORM_DEPTS: PlatformDepartment[] = [
  { name: 'Sales & CRM', outcome: 'Leads responded to in seconds with full customer context.', icon: 'fa-users' },
  { name: 'F&I & Desking', outcome: 'Automated deal structuring with AI risk assessments.', icon: 'fa-file-invoice-dollar' },
  { name: 'Service & Parts', icon: 'fa-screwdriver-wrench', outcome: 'AI identifies $36K in monthly revenue your team is missing.' },
  { name: 'Accounting & Payroll', icon: 'fa-calculator', outcome: '3-hour daily reconciliation becomes 5 minutes.' },
  { name: 'Digital Retail', icon: 'fa-laptop-code', outcome: 'Consistent buying experience across web and showroom.' },
  { name: 'Inventory', icon: 'fa-car-side', outcome: 'Smart stocking powered by local market demand data.' },
  { name: 'Advanced Analytics', icon: 'fa-chart-simple', outcome: 'Real-time P&L visibility across all rooftops.' }
];

export const PlatformMap: React.FC = () => (
  <section className="py-24 bg-slate-950 text-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <h2 className="text-4xl font-extrabold mb-6">One platform. Every department. No bolt-ons.</h2>
        <p className="text-slate-400 text-lg">One unified data model powering your entire enterprise.</p>
      </div>

      <div className="relative flex flex-col items-center">
        {/* Visual Core */}
        <div className="relative z-10 w-48 h-48 md:w-64 md:h-64 rounded-full bg-blue-600 flex flex-col items-center justify-center shadow-[0_0_100px_rgba(37,99,235,0.4)] mb-16 lg:mb-0">
          <div className="text-xs font-black tracking-[0.3em] opacity-80 mb-2">OPERATING SYSTEM</div>
          <div className="text-4xl md:text-5xl font-black italic">T1</div>
        </div>

        {/* Spokes Layout (Grid for simplicity in wireframe) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {PLATFORM_DEPTS.map((dept, idx) => (
            <div key={idx} className="p-6 rounded-2xl border border-slate-800 bg-slate-900/50 hover:bg-slate-900 transition-colors group">
              <div className="w-10 h-10 rounded-lg bg-blue-600/10 border border-blue-600/20 flex items-center justify-center text-blue-500 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <i className={`fa-solid ${dept.icon}`}></i>
              </div>
              <h4 className="text-lg font-bold mb-2">{dept.name}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">{dept.outcome}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export const CustomerProof: React.FC = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-extrabold text-slate-900 mb-16 text-center">Results that speak for themselves.</h2>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-slate-50 rounded-3xl p-10 lg:p-12 border border-slate-200">
          <div className="flex justify-between items-start mb-8">
            <div>
              <div className="text-slate-900 font-black text-2xl tracking-tighter mb-1 uppercase">Dolan Auto Group</div>
              <div className="text-slate-500 text-sm font-bold uppercase tracking-widest">Multi-state Enterprise</div>
            </div>
            <div className="w-12 h-12 rounded-full bg-slate-200"></div>
          </div>
          <div className="text-6xl font-black text-blue-600 mb-4">$200K</div>
          <div className="text-2xl font-extrabold text-slate-900 mb-6">Annual savings in manual errors</div>
          <p className="text-slate-600 text-lg leading-relaxed italic mb-8">
            "Eliminated manual cashiering errors across 50-state TT&L processing. The platform paid for itself in the first year."
          </p>
          <a href="#" className="text-blue-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
            Read the full story <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>

        <div className="bg-slate-50 rounded-3xl p-10 lg:p-12 border border-slate-200">
          <div className="flex justify-between items-start mb-8">
            <div>
              <div className="text-slate-900 font-black text-2xl tracking-tighter mb-1 uppercase">Sandy Sansing</div>
              <div className="text-slate-500 text-sm font-bold uppercase tracking-widest">Regional Leader</div>
            </div>
            <div className="w-12 h-12 rounded-full bg-slate-200"></div>
          </div>
          <div className="text-6xl font-black text-blue-600 mb-4">40%</div>
          <div className="text-2xl font-extrabold text-slate-900 mb-6">Reduction in lead response time</div>
          <p className="text-slate-600 text-lg leading-relaxed italic mb-8">
            "We aren't just faster—we are smarter. Our team has full context before they pick up the phone."
          </p>
          <a href="#" className="text-blue-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
            Read the full story <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export const FounderStory: React.FC = () => (
  <section className="py-24 bg-slate-50 border-t border-slate-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
      <div className="aspect-[4/5] bg-slate-200 rounded-3xl overflow-hidden relative">
         <img src="https://picsum.photos/800/1000" alt="Jay Vijayan" className="w-full h-full object-cover grayscale" />
         <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-8">
            <div className="text-white">
               <div className="font-black text-2xl">Jay Vijayan</div>
               <div className="text-slate-300 font-bold uppercase tracking-widest text-xs">Founder & CEO</div>
            </div>
         </div>
      </div>
      <div>
        <h2 className="text-4xl font-extrabold text-slate-900 mb-8">Built by someone who's done this before.</h2>
        <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
          <p>
            Jay Vijayan built the Warp ERP system that runs Tesla's global operations. In 2016, he looked at automotive retail — a $1.8 trillion industry running on 50-year-old software — and made a decision: build it from scratch.
          </p>
          <p>
            No legacy code. No acquired modules. One unified, AI-native platform.
          </p>
          <p className="font-bold text-slate-900">
            1,700+ dealerships later, the industry is following where Tekion leads.
          </p>
        </div>
        <button className="mt-10 px-8 py-4 bg-white border border-slate-200 rounded-full font-bold text-slate-900 hover:bg-slate-100 transition-colors">
          Meet the Leadership Team
        </button>
      </div>
    </div>
  </section>
);

export const MigrationCTA: React.FC = () => (
  <section className="py-24 bg-blue-600 text-white text-center">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl lg:text-5xl font-extrabold mb-8">Free your data. Run your dealership with AI.</h2>
      <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-16">
        Migration to Tekion isn't switching DMS. It's unlocking AI-native operations across your entire dealership. One migration. Immediate impact.
      </p>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {[
          { title: "Migrate Once", desc: "Proven migration pathway. Dedicated team. No operational disruption." },
          { title: "Unlock AI Everywhere", desc: "Every department becomes AI-powered from day one." },
          { title: "Measure the Results", desc: "Start with Service (fastest ROI). Expand at your pace." }
        ].map((item, idx) => (
          <div key={idx} className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl text-left border border-white/10">
            <h4 className="text-xl font-bold mb-4">{item.title}</h4>
            <p className="text-blue-100 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <button className="bg-white text-blue-600 px-10 py-5 rounded-full font-black text-xl shadow-2xl hover:bg-blue-50 transition-all">
        Talk to a Platform Specialist
      </button>
    </div>
  </section>
);

export const Footer: React.FC = () => (
  <footer className="bg-slate-950 text-slate-400 py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-20">
        <div className="col-span-2">
          <div className="text-2xl font-black text-white tracking-tighter mb-6">tekion<span className="text-blue-600">.ai</span></div>
          <p className="max-w-xs text-sm leading-relaxed mb-8">
            The AI-native operating system for the world's most innovative automotive retailers.
          </p>
          <div className="flex gap-4">
            <i className="fa-brands fa-linkedin text-xl hover:text-white transition-colors cursor-pointer"></i>
            <i className="fa-brands fa-x-twitter text-xl hover:text-white transition-colors cursor-pointer"></i>
            <i className="fa-brands fa-youtube text-xl hover:text-white transition-colors cursor-pointer"></i>
          </div>
        </div>
        <div>
          <h5 className="text-white font-bold mb-6">Platform</h5>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-white">AI Assistant (T1)</a></li>
            <li><a href="#" className="hover:text-white">Unified Data Model</a></li>
            <li><a href="#" className="hover:text-white">Integrations</a></li>
            <li><a href="#" className="hover:text-white">Security</a></li>
          </ul>
        </div>
        <div>
          <h5 className="text-white font-bold mb-6">Solutions</h5>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-white">Sales Velocity</a></li>
            <li><a href="#" className="hover:text-white">Service Revenue</a></li>
            <li><a href="#" className="hover:text-white">Financial Control</a></li>
            <li><a href="#" className="hover:text-white">Enterprise Ops</a></li>
          </ul>
        </div>
        <div>
          <h5 className="text-white font-bold mb-6">Company</h5>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
            <li><a href="#" className="hover:text-white">Press</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
      </div>
      
      <div className="pt-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-wrap justify-center gap-6 text-[10px] font-black tracking-widest uppercase opacity-40">
          <span>SOC 1 Type II</span>
          <span>SOC 2 Type II</span>
          <span>ISO 27001</span>
          <span>ISO 27701</span>
          <span>ISO/IEC 42001</span>
        </div>
        <div className="text-xs">
          © 2026 Tekion Corp. All rights reserved. <span className="mx-2 text-slate-800">|</span> Privacy Policy <span className="mx-2 text-slate-800">|</span> Security
        </div>
      </div>
    </div>
  </footer>
);
