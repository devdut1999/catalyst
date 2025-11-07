"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const solutions = [
  {
    id: "document-processing",
    icon: "📄",
    title: "Intelligent Document Processing",
    description: "Automate invoice, PO, and shipping document processing. Extract data in seconds, eliminate manual entry, and reduce errors by 95%.",
    benefits: ["99% faster processing", "95% error reduction", "Automatic validation"],
    industries: "Manufacturing, Logistics, Finance",
    href: "/solutions/document-processing",
    available: true,
  },
  {
    id: "feedback-analysis",
    icon: "💬",
    title: "Customer Feedback Analysis",
    description: "Transform thousands of customer reviews, emails, and social media comments into actionable insights with AI-powered sentiment analysis.",
    benefits: ["Real-time insights", "Sentiment tracking", "Priority alerts"],
    industries: "E-commerce, Retail, SaaS",
    href: "/solutions/feedback-analysis",
    available: true,
  },
];

export default function SolutionsPage() {
  return (
    <div className="relative">
      {/* Background effects */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-background" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-16 font-display leading-tight tracking-tight">
            <span className="text-gradient glow-text">Experience AI Solutions</span>
            <br />
            <span className="text-white">Built for Your Industry</span>
          </h1>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Link href={solution.href}>
                  <div className="group bg-secondary/50 backdrop-blur-sm rounded-xl border border-gray-800 p-8 h-full hover:border-primary transition-all card-glow cursor-pointer">
                    {/* Icon */}
                    <div className="text-6xl mb-6 inline-block bg-gradient-to-br from-primary/20 to-accent-purple/20 p-4 rounded-xl group-hover:scale-110 transition-transform">
                      {solution.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {solution.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 leading-relaxed mb-6">
                      {solution.description}
                    </p>

                    {/* Benefits */}
                    <div className="space-y-2 mb-6">
                      {solution.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <span className="text-primary text-sm">✓</span>
                          <span className="text-sm text-gray-300">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    {/* Industries */}
                    <div className="mb-6">
                      <p className="text-xs text-gray-500 mb-2">Perfect for:</p>
                      <p className="text-sm text-gray-400">{solution.industries}</p>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all">
                      <span>View Interactive Demo</span>
                      <span className="text-xl">→</span>
                    </div>

                    {/* Hover effect line */}
                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-accent-purple group-hover:w-full transition-all duration-500"></div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-secondary/80 to-secondary/50 backdrop-blur-lg p-12 rounded-2xl border border-gray-800 card-glow text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Don't See Your Use Case?
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              We build custom AI solutions for any business challenge. 
              Let's discuss what you need.
            </p>
            <a href="/book" className="btn-primary px-10 py-4 text-lg inline-block">
              <span>Schedule a Free Consultation</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

