"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-secondary/50 backdrop-blur-sm border border-primary/30 rounded-full mb-8">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse mr-2"></span>
            <span className="text-sm text-gray-300">AI-Powered Business Solutions</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-display">
            We Build Custom AI to
            <br />
            <span className="text-gradient glow-text">
              Solve Your Biggest Challenges
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12">
            Stop guessing. Start predicting. Transform your business with 
            AI-powered automation, insights, and intelligent applications.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/book"
              className="group relative px-8 py-4 bg-primary hover:bg-primary-dark text-background font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-primary/50 animate-glow"
            >
              <span className="relative z-10">Book a Free Discovery Call</span>
            </Link>
            
            <Link
              href="/#services"
              className="px-8 py-4 bg-secondary/50 backdrop-blur-sm border border-gray-800 hover:border-primary text-foreground font-semibold rounded-lg transition-all card-glow"
            >
              Explore Our Services
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">10+</div>
              <div className="text-sm text-gray-400">Projects Delivered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <div className="text-sm text-gray-400">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-gray-400">Support Available</div>
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-float"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

