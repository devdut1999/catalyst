"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discover",
    description: "We map out your business problem, understand your goals, and identify the best AI opportunities.",
    icon: "🔍",
  },
  {
    number: "02",
    title: "Build",
    description: "We rapidly prototype and develop a custom AI solution tailored to your specific needs.",
    icon: "⚙️",
  },
  {
    number: "03",
    title: "Deploy",
    description: "We integrate the AI into your workflow, train your team, and measure real business results.",
    icon: "🚀",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">
            How <span className="text-gradient">It Works</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From idea to implementation, we make AI adoption simple and effective.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent-purple to-accent-green transform -translate-y-1/2 opacity-20"></div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Step Card */}
                <div className="bg-secondary/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800 card-glow text-center relative z-10">
                  {/* Number Badge */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent-purple rounded-full flex items-center justify-center text-xl font-bold border-4 border-background">
                      {step.number}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="text-6xl mb-6 mt-8">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow (for desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 text-primary text-3xl z-0">
                    →
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-secondary/30 backdrop-blur-sm p-8 rounded-xl border border-gray-800 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-400 mb-6">
              Book a free 15-minute discovery call and let's explore how AI can transform your business.
            </p>
            <a
              href="/book"
              className="inline-block px-8 py-4 bg-primary hover:bg-primary-dark text-background font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-primary/50"
            >
              Schedule Your Call
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

