"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent-purple/20 to-accent-green/20 blur-3xl opacity-30"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-secondary/80 to-secondary/50 backdrop-blur-lg p-12 md:p-16 rounded-2xl border border-gray-800 card-glow text-center"
        >
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
            Ready to See What <span className="text-gradient">AI Can Do</span> for You?
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Stop wondering if AI can solve your business challenges. 
            Let's have a conversation and find out together.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/book"
              className="group relative px-10 py-5 bg-primary hover:bg-primary-dark text-background font-bold text-lg rounded-lg transition-all hover:shadow-xl hover:shadow-primary/50 animate-glow"
            >
              <span className="relative z-10">Book Your 15-Minute Call Now</span>
            </Link>
          </div>

          {/* Trust Line */}
          <p className="mt-8 text-sm text-gray-500">
            No sales pitch. No obligations. Just a genuine conversation about your business.
          </p>

          {/* Decorative Elements */}
          <div className="flex justify-center items-center gap-8 mt-10 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <span className="text-primary text-xl">✓</span>
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary text-xl">✓</span>
              <span>Quick Response</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary text-xl">✓</span>
              <span>Custom Solutions</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

