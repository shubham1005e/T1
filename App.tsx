
import React, { useState } from 'react';
import { 
  Header, 
  UtilityStrip, 
  Hero, 
  MetricsBar, 
  WorkflowSection, 
  ArchitectureComparison, 
  TrustSection, 
  PlatformMap, 
  CustomerProof, 
  FounderStory, 
  MigrationCTA, 
  Footer 
} from './components/Sections';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <UtilityStrip />
      <Header />
      <main>
        <Hero />
        <MetricsBar />
        <WorkflowSection />
        <ArchitectureComparison />
        <TrustSection />
        <PlatformMap />
        <CustomerProof />
        <FounderStory />
        <MigrationCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
