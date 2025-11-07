import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Consultation - Catalyst AI",
  description: "Schedule a free 15-minute discovery call to discuss your AI needs and how we can help transform your business.",
};

export default function BookPage() {
  return (
    <div className="relative min-h-screen py-20">
      {/* Background effects */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-background" />
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            Book Your <span className="text-gradient">Free Consultation</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Let's discuss how AI can transform your business. Schedule a 15-minute discovery call to explore your challenges and opportunities.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 animate-slide-up">
          <div className="bg-secondary/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 card-glow">
            <div className="text-primary text-3xl mb-3">⚡</div>
            <h3 className="text-lg font-semibold mb-2">Quick & Focused</h3>
            <p className="text-gray-400 text-sm">15 minutes to understand your needs and explore possibilities</p>
          </div>
          
          <div className="bg-secondary/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 card-glow">
            <div className="text-primary text-3xl mb-3">💡</div>
            <h3 className="text-lg font-semibold mb-2">Free Consultation</h3>
            <p className="text-gray-400 text-sm">No obligations, just valuable insights for your business</p>
          </div>
          
          <div className="bg-secondary/50 backdrop-blur-sm p-6 rounded-lg border border-gray-800 card-glow">
            <div className="text-primary text-3xl mb-3">🎯</div>
            <h3 className="text-lg font-semibold mb-2">Tailored Solutions</h3>
            <p className="text-gray-400 text-sm">Custom AI strategies designed specifically for your challenges</p>
          </div>
        </div>

        {/* Calendly Embed Container */}
        <div className="bg-secondary/30 backdrop-blur-sm rounded-lg border border-gray-800 p-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <div className="calendly-inline-widget" 
               data-url="https://calendly.com/dashdevadutta/30min?hide_gdpr_banner=1&background_color=1a1a2e&text_color=ffffff&primary_color=00e5ff"
               style={{ minWidth: "320px", height: "700px" }}>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <p className="text-gray-400 mb-4">
            Not ready to book yet? <a href="/#contact" className="text-primary hover:text-primary-dark transition-colors">Send us a message</a> instead.
          </p>
          <p className="text-sm text-gray-500">
            We respect your privacy. Your information will never be shared with third parties.
          </p>
        </div>
      </div>
    </div>
  );
}

