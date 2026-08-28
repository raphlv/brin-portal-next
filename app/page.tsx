import React from 'react';
import HeroFuturistic from '@/components/HeroFuturistic';
import LiveImpactStats from '@/components/LiveImpactStats';
import ElsaServicesHub from '@/components/ElsaServicesHub';
import ResearchOrgExplorer from '@/components/ResearchOrgExplorer';
import StrategicFacilities from '@/components/StrategicFacilities';
import FundingAndTalent from '@/components/FundingAndTalent';
import NewsAndEvents from '@/components/NewsAndEvents';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroFuturistic />
      <LiveImpactStats />
      <ElsaServicesHub />
      <ResearchOrgExplorer />
      <StrategicFacilities />
      <FundingAndTalent />
      <NewsAndEvents />
    </div>
  );
}
