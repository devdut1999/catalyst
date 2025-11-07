"use client";

import Script from "next/script";
import { useState } from "react";

export default function BookPage() {
  const [calendlyLoaded, setCalendlyLoaded] = useState(false);
  const [showFallback, setShowFallback] = useState(false);

  return (
    <>
      {/* Lazy load Calendly script only on this page */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
        onLoad={() => {
          setTimeout(() => setCalendlyLoaded(true), 500);
        }}
        onError={() => setShowFallback(true)}
      />
      
      {/* Fallback timeout - show alternative after 10 seconds */}
      {!calendlyLoaded && typeof window !== 'undefined' && setTimeout(() => {
        if (!calendlyLoaded) setShowFallback(true);
      }, 10000) && null}
      
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
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-6">
            Let's discuss how AI can transform your business. Schedule a 15-minute discovery call to explore your challenges and opportunities.
          </p>
          
          {/* Direct link option */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center text-sm">
            <p className="text-gray-500">Calendar not loading?</p>
            <a
              href="https://calendly.com/dashdevadutta/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-dark underline font-medium"
            >
              Open in new tab →
            </a>
            <span className="text-gray-700">or</span>
            <a
              href="mailto:hello@catalyst-ai.com?subject=Book a Consultation"
              className="text-primary hover:text-primary-dark underline font-medium"
            >
              Email us directly
            </a>
          </div>
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
        <div className="bg-secondary/30 backdrop-blur-sm rounded-lg border border-gray-800 p-8 animate-slide-up relative" style={{ animationDelay: "0.2s", minHeight: "700px" }}>
          {/* Loading Skeleton */}
          {!calendlyLoaded && !showFallback && (
            <div className="absolute inset-8 flex flex-col items-center justify-center space-y-6">
              <div className="relative w-20 h-20">
                <div className="absolute inset-0 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
              </div>
              <p className="text-gray-400 text-lg">Loading calendar...</p>
              <div className="space-y-3 w-full max-w-md">
                <div className="h-4 bg-gray-800 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-800 rounded animate-pulse w-3/4"></div>
                <div className="h-4 bg-gray-800 rounded animate-pulse w-1/2"></div>
              </div>
              <p className="text-sm text-gray-500 mt-4">Taking too long? <button onClick={() => setShowFallback(true)} className="text-primary hover:underline">Click here</button></p>
            </div>
          )}
          
          {/* Fallback - Direct booking link */}
          {showFallback && !calendlyLoaded && (
            <div className="flex flex-col items-center justify-center py-20 space-y-6">
              <div className="text-6xl mb-4">📅</div>
              <h3 className="text-2xl font-bold">Having trouble loading?</h3>
              <p className="text-gray-400 text-center max-w-md">No problem! You can book directly through Calendly or send us an email.</p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <a
                  href="https://calendly.com/dashdevadutta/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary px-8 py-4"
                >
                  <span>Open Calendly Direct →</span>
                </a>
                <a
                  href="mailto:hello@catalyst-ai.com?subject=Consultation Request"
                  className="px-8 py-4 bg-transparent border-2 border-primary hover:bg-primary hover:text-background text-primary font-semibold rounded-lg transition-all"
                >
                  Email Us Instead
                </a>
              </div>
              <button 
                onClick={() => {
                  setShowFallback(false);
                  window.location.reload();
                }}
                className="text-sm text-gray-500 hover:text-primary transition-colors mt-4"
              >
                ← Try loading calendar again
              </button>
            </div>
          )}
          
          {/* Calendly Widget */}
          <div 
            className={`calendly-inline-widget transition-opacity duration-500 ${calendlyLoaded ? 'opacity-100' : 'opacity-0'}`}
            data-url="https://calendly.com/dashdevadutta/30min?hide_gdpr_banner=1&background_color=1a1a2e&text_color=ffffff&primary_color=00e5ff&embed_domain=catalyst-solutions.vercel.app&embed_type=Inline"
            style={{ minWidth: "320px", height: "700px" }}
          >
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
    </>
  );
}

