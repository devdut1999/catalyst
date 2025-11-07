import FeedbackAnalysisDemo from "@/components/solutions/FeedbackAnalysisDemo";
import Link from "next/link";

export const metadata = {
  title: "Customer Feedback Analysis - Catalyst AI",
  description: "Turn thousands of customer reviews into actionable insights with AI-powered sentiment analysis and priority detection.",
};

export default function FeedbackAnalysisPage() {
  return (
    <div className="relative">
      {/* Background effects */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-background" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl animate-float" />
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 font-display leading-tight">
              Turn Customer Chaos Into
              <span className="text-gradient glow-text"> Clear Insights</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Stop drowning in reviews, emails, and social comments. Our AI analyzes thousands 
              of customer feedbacks and delivers a simple dashboard with actionable priorities.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="bg-secondary/50 backdrop-blur-sm rounded-lg border border-gray-800 p-4 text-center">
                <div className="text-3xl font-bold text-primary mb-1">1000+</div>
                <div className="text-sm text-gray-400">Reviews/Day</div>
              </div>
              <div className="bg-secondary/50 backdrop-blur-sm rounded-lg border border-gray-800 p-4 text-center">
                <div className="text-3xl font-bold text-primary mb-1">Real-time</div>
                <div className="text-sm text-gray-400">Analysis</div>
              </div>
              <div className="bg-secondary/50 backdrop-blur-sm rounded-lg border border-gray-800 p-4 text-center">
                <div className="text-3xl font-bold text-primary mb-1">Top 3</div>
                <div className="text-sm text-gray-400">Issues Flagged</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Interactive Demo */}
      <FeedbackAnalysisDemo />

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-secondary/80 to-secondary/50 backdrop-blur-lg p-12 rounded-2xl border border-gray-800 card-glow text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Understand <span className="text-primary">Your Customers</span> Better?
            </h2>
            <p className="text-gray-400 mb-8">
              Let's show you how AI can analyze your specific customer feedback sources.
            </p>
            <a href="/book" className="btn-primary px-10 py-4 inline-block">
              <span>Book a Free Consultation</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

