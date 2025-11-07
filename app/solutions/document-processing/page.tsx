import DocumentProcessingDemo from "@/components/solutions/DocumentProcessingDemo";
import Link from "next/link";

export const metadata = {
  title: "Intelligent Document Processing - Catalyst AI",
  description: "Automate invoice and document processing with AI. Extract data in seconds, eliminate manual entry, reduce errors by 95%.",
};

export default function DocumentProcessingPage() {
  return (
    <div className="relative">
      {/* Background effects */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-background" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 font-display leading-tight">
              Stop Wasting Time on 
              <span className="text-gradient glow-text"> Manual Data Entry</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Our AI reads invoices, purchase orders, and shipping documents automatically. 
              Extract data in seconds, eliminate errors, and free your team for strategic work.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="bg-secondary/50 backdrop-blur-sm rounded-lg border border-gray-800 p-4 text-center">
                <div className="text-3xl font-bold text-primary mb-1">99%</div>
                <div className="text-sm text-gray-400">Faster</div>
              </div>
              <div className="bg-secondary/50 backdrop-blur-sm rounded-lg border border-gray-800 p-4 text-center">
                <div className="text-3xl font-bold text-primary mb-1">95%</div>
                <div className="text-sm text-gray-400">Error Reduction</div>
              </div>
              <div className="bg-secondary/50 backdrop-blur-sm rounded-lg border border-gray-800 p-4 text-center">
                <div className="text-3xl font-bold text-primary mb-1">5 sec</div>
                <div className="text-sm text-gray-400">Per Document</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Interactive Demo */}
      <DocumentProcessingDemo />

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-secondary/80 to-secondary/50 backdrop-blur-lg p-12 rounded-2xl border border-gray-800 card-glow text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Automate <span className="text-primary">Your</span> Document Processing?
            </h2>
            <p className="text-gray-400 mb-8">
              Let's discuss your specific workflow and show you a custom demo.
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

