import HeroSection from "@/components/home/HeroSection";
import AITransition from "@/components/home/AITransition";
import ProblemSolutionSection from "@/components/home/ProblemSolutionSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <div className="relative">
      {/* Animated background gradient */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-background" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <HeroSection />
      <AITransition />
      <ProblemSolutionSection />
      <HowItWorksSection />
      <CTASection />
    </div>
  );
}

