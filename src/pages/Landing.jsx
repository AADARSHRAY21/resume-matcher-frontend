import LandingNav from '../components/landing/LandingNav';
import Hero from '../components/landing/Hero';
import WhySection from '../components/landing/WhySection';
import FeatureGrid from '../components/landing/FeatureGrid';

export default function Landing() {
  return (
    <div className="min-h-screen bg-bg-base">
      <LandingNav />
      <Hero />
      <WhySection />
      <FeatureGrid />
    </div>
  );
}