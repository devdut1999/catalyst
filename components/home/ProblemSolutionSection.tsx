"use client";

import { motion } from "framer-motion";

const services = [
  {
    icon: "⚡",
    title: "Automate Workflows",
    description: "We build AI agents to handle your repetitive tasks, freeing your team to focus on strategic work.",
    color: "from-primary to-accent-cyan",
  },
  {
    icon: "📊",
    title: "Unlock Insights",
    description: "Turn your raw data into predictive models and actionable intelligence that drives decisions.",
    color: "from-accent-purple to-accent-cyan",
  },
  {
    icon: "🤖",
    title: "Create Intelligence",
    description: "Develop custom chatbots, assistants, and AI tools tailored to your team's specific needs.",
    color: "from-accent-green to-primary",
  },
];

export default function ProblemSolutionSection() {
  return (
    <section id="services" className="pt-16 pb-20 relative">
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
            Buried in <span className="text-primary">Manual Work?</span>
            <br />
            Sitting on <span className="text-accent-purple">Data You Can't Use?</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We help businesses transform inefficiency into competitive advantage with custom AI solutions.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="bg-secondary/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800 card-glow h-full">
                {/* Icon */}
                <div className={`text-6xl mb-6 inline-block bg-gradient-to-br ${service.color} p-4 rounded-xl`}>
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>

                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-accent-purple group-hover:w-full transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6 text-lg">
            Ready to see what AI can do for your specific business?
          </p>
          <a
            href="/book"
            className="inline-block btn-primary px-8 py-4"
          >
            <span>Let's Discuss Your Challenge</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

