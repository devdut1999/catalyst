"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-16 font-display leading-tight tracking-tight">
            <span className="text-white">
              Custom AI Solutions
            </span>
            <br />
            <span className="text-gradient glow-text">
              Built for Your Business
            </span>
          </h1>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/book"
              className="btn-primary px-10 py-5 text-lg"
            >
              <span>Book a Free Discovery Call</span>
            </Link>
            
            <Link
              href="/solutions"
              className="px-10 py-5 bg-transparent border-2 border-gray-700 hover:border-primary text-foreground font-semibold rounded-lg transition-all card-glow hover:bg-secondary/30 text-lg"
            >
              View Solutions
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

      </div>
    </section>
  );
}

