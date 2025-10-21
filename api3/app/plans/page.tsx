import { Hero } from '@/components/plans/Hero';
import { Benefits } from '@/components/plans/Benefits';
import { HowItWorks } from '@/components/plans/HowItWorks';
import { PricingSection } from '@/components/plans/PricingSection';
import { PricingComparison } from '@/components/plans/PricingComparison';

export default function PaginaDePlanos() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Benefits />
      <HowItWorks />
      <PricingSection />
      <PricingComparison />
      
      {/* 4. Adicione o rodapé, assim como no projeto original */}
    </div>
  );
}