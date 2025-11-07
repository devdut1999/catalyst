"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function DocumentProcessingDemo() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleDemo = () => {
    setIsProcessing(true);
    setShowResults(false);
    
    setTimeout(() => {
      setIsProcessing(false);
      setShowResults(true);
    }, 2000);
  };

  const sampleData = {
    invoiceNumber: "INV-2024-8472",
    poNumber: "PO-12345",
    vendor: "ABC Chemicals Ltd.",
    date: "Nov 7, 2025",
    items: [
      { name: "Titanium Dioxide (Pigment)", quantity: "500 kg", unitPrice: "$25.00", total: "$12,500" },
      { name: "Acrylic Resin Base", quantity: "200 L", unitPrice: "$42.00", total: "$8,400" },
    ],
    subtotal: "$20,900",
    tax: "$1,881",
    total: "$22,781",
    validation: "✓ PO validated - No discrepancies found",
    processingTime: "1.8 seconds",
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Problem → Solution Transformation (Row by Row) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
            How AI <span className="text-gradient">Transforms</span> Document Processing
          </h2>

          {/* Labels */}
          <div className="grid md:grid-cols-2 gap-12 mb-6">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full">
                <span className="text-sm font-semibold text-red-400 uppercase tracking-wide">The Problems</span>
              </div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-primary/20 border border-primary/30 rounded-full">
                <span className="text-sm font-semibold text-primary uppercase tracking-wide">AI Solutions</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            {/* Row 1: Speed */}
            <div className="grid md:grid-cols-2 gap-8 items-center relative">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-red-500/20 border-2 border-red-500/50 flex items-center justify-center flex-shrink-0">
                  <span className="text-red-400 font-bold text-xl">✕</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-white mb-2 text-lg">5-10 Minutes Per Invoice</h4>
                  <p className="text-gray-400 text-sm">Manual data entry creates bottlenecks and delayed payments.</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-start gap-4 bg-gradient-to-r from-primary/10 to-transparent p-4 rounded-lg border border-primary/20"
              >
                <div className="w-10 h-10 rounded-full bg-primary/30 border-2 border-primary flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/50">
                  <span className="text-green-400 font-bold text-xl">✓</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-white mb-2 text-lg">5 Seconds Per Invoice</h4>
                  <p className="text-gray-300 text-sm">AI processes documents 99% faster with instant extraction.</p>
                </div>
              </motion.div>
            </div>

            {/* Row 2: Errors */}
            <div className="grid md:grid-cols-2 gap-8 items-center relative">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-red-500/20 border-2 border-red-500/50 flex items-center justify-center flex-shrink-0">
                  <span className="text-red-400 font-bold text-xl">✕</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-white mb-2 text-lg">Costly Typing Errors</h4>
                  <p className="text-gray-400 text-sm">One wrong number = financial disaster. Hard to catch.</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex items-start gap-4 bg-gradient-to-r from-primary/10 to-transparent p-4 rounded-lg border border-primary/20"
              >
                <div className="w-10 h-10 rounded-full bg-primary/30 border-2 border-primary flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/50">
                  <span className="text-green-400 font-bold text-xl">✓</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-white mb-2 text-lg">95% Fewer Errors</h4>
                  <p className="text-gray-300 text-sm">AI validates every field automatically before saving.</p>
                </div>
              </motion.div>
            </div>

            {/* Row 3: Team Efficiency */}
            <div className="grid md:grid-cols-2 gap-8 items-center relative">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-red-500/20 border-2 border-red-500/50 flex items-center justify-center flex-shrink-0">
                  <span className="text-red-400 font-bold text-xl">✕</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-white mb-2 text-lg">Wasted Finance Team</h4>
                  <p className="text-gray-400 text-sm">Skilled employees stuck doing repetitive data entry.</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex items-start gap-4 bg-gradient-to-r from-primary/10 to-transparent p-4 rounded-lg border border-primary/20"
              >
                <div className="w-10 h-10 rounded-full bg-primary/30 border-2 border-primary flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/50">
                  <span className="text-green-400 font-bold text-xl">✓</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-white mb-2 text-lg">Team Focuses on Strategy</h4>
                  <p className="text-gray-300 text-sm">Finance team does analysis instead of data entry.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* AI Dashboard - Full Width, Better Design */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold mb-8 text-center">
            What <span className="text-primary">Management</span> Sees
          </h3>

          {/* Glassmorphic Dashboard */}
          <div className="bg-gradient-to-br from-white/5 via-primary/5 to-accent-purple/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 shadow-2xl relative overflow-hidden">
            {/* Glowing orbs */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-purple/30 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                <div>
                  <h4 className="text-2xl font-bold text-white mb-1">Document Processing Dashboard</h4>
                  <p className="text-sm text-gray-400">Real-time automation metrics</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  <span className="text-sm text-green-400 font-medium">Live</span>
                </div>
              </div>

              {/* Top Metrics - Bright Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 1.0 }}
                  className="bg-gradient-to-br from-primary/20 to-primary/10 backdrop-blur-sm rounded-xl border border-primary/40 p-6 text-center shadow-lg shadow-primary/10"
                >
                  <div className="text-4xl font-extrabold text-primary mb-2">127</div>
                  <div className="text-sm text-gray-300">Invoices Today</div>
                  <div className="text-xs text-primary mt-1">↑ 15 from yesterday</div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 1.1 }}
                  className="bg-gradient-to-br from-green-500/20 to-green-500/10 backdrop-blur-sm rounded-xl border border-green-500/40 p-6 text-center shadow-lg shadow-green-500/10"
                >
                  <div className="text-4xl font-extrabold text-green-400 mb-2">18.5</div>
                  <div className="text-sm text-gray-300">Hours Saved</div>
                  <div className="text-xs text-green-400 mt-1">This week</div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 1.2 }}
                  className="bg-gradient-to-br from-accent-purple/20 to-accent-purple/10 backdrop-blur-sm rounded-xl border border-accent-purple/40 p-6 text-center shadow-lg shadow-accent-purple/10"
                >
                  <div className="text-4xl font-extrabold text-accent-purple mb-2">99%</div>
                  <div className="text-sm text-gray-300">Accuracy Rate</div>
                  <div className="text-xs text-accent-purple mt-1">Auto-validated</div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 1.3 }}
                  className="bg-gradient-to-br from-yellow-500/20 to-yellow-500/10 backdrop-blur-sm rounded-xl border border-yellow-500/40 p-6 text-center shadow-lg shadow-yellow-500/10"
                >
                  <div className="text-4xl font-extrabold text-yellow-400 mb-2">3</div>
                  <div className="text-sm text-gray-300">Errors Caught</div>
                  <div className="text-xs text-yellow-400 mt-1">Needs review</div>
                </motion.div>
              </div>

              {/* Processing Activity Timeline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.4 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 mb-6"
              >
                <h5 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="text-primary">📈</span>
                  Processing Activity (Last 7 Days)
                </h5>
                <div className="h-32 flex items-end justify-between gap-2">
                  {[45, 62, 58, 73, 89, 94, 127].map((value, i) => (
                    <motion.div 
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${(value / 127) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 1.5 + i * 0.1 }}
                      className="flex-1 flex flex-col items-center gap-2"
                    >
                      <div 
                        className="w-full bg-gradient-to-t from-primary via-primary to-accent-purple rounded-t-lg shadow-lg shadow-primary/30 min-h-[30px] flex items-start justify-center pt-2" 
                        style={{ height: `${(value / 127) * 100}%` }}
                      >
                        <span className="text-xs text-white font-bold">{value}</span>
                      </div>
                      <span className="text-xs text-gray-400">{['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}</span>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between bg-green-500/10 border border-green-500/30 rounded-lg py-2 px-4">
                  <span className="text-sm text-gray-300">Weekly Total:</span>
                  <span className="text-green-400 font-bold">648 invoices processed</span>
                </div>
              </motion.div>

              {/* Error Detection Alert */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.6 }}
                className="bg-gradient-to-r from-yellow-500/15 via-yellow-500/10 to-yellow-500/5 backdrop-blur-sm border border-yellow-500/40 rounded-xl p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-500/30 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-yellow-500/50">
                    <span className="text-2xl">⚠️</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-yellow-400 font-bold text-lg mb-2">Pricing Error Detected</p>
                    <p className="text-gray-200 mb-3">
                      <strong className="text-white">Invoice #8472:</strong> Total amount ($22,781) doesn't match 
                      original order ($20,900). Flagged for finance team review.
                    </p>
                    <div className="flex gap-3">
                      <div className="bg-background/50 border border-gray-700 rounded-lg px-4 py-2 text-xs">
                        <span className="text-gray-400">Expected: </span>
                        <span className="text-white font-semibold">$20,900</span>
                      </div>
                      <div className="bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-2 text-xs">
                        <span className="text-gray-400">Actual: </span>
                        <span className="text-red-400 font-semibold">$22,781</span>
                      </div>
                      <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg px-4 py-2 text-xs">
                        <span className="text-gray-400">Difference: </span>
                        <span className="text-yellow-400 font-semibold">+$1,881</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>


        {/* Section Header for Demo */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Try It <span className="text-primary">Yourself</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Process a sample invoice and see the AI extract data in real-time
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left: Upload Area */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-secondary/50 backdrop-blur-sm rounded-xl border border-gray-800 p-8 sticky top-24">
              <h3 className="text-xl font-bold mb-6">📄 Sample Invoice</h3>
              
              {/* Demo Invoice Preview */}
              <div className="bg-background/80 rounded-lg border-2 border-dashed border-gray-700 p-8 mb-6 hover:border-primary transition-colors">
                <div className="space-y-2 text-left text-sm">
                  <div className="font-bold text-white border-b border-gray-800 pb-2 mb-3">INVOICE</div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Invoice #:</span>
                    <span className="text-gray-300">INV-2024-8472</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Date:</span>
                    <span className="text-gray-300">Nov 7, 2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">From:</span>
                    <span className="text-gray-300">ABC Chemicals Ltd.</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">PO:</span>
                    <span className="text-gray-300">PO-12345</span>
                  </div>
                  <div className="border-t border-gray-800 pt-3 mt-3">
                    <div className="font-semibold text-white mb-2">Items:</div>
                    <div className="text-xs space-y-1">
                      <div>• Titanium Dioxide 500kg - $12,500</div>
                      <div>• Acrylic Resin 200L - $8,400</div>
                    </div>
                  </div>
                  <div className="flex justify-between font-bold text-white border-t border-gray-800 pt-2 mt-2">
                    <span>Total:</span>
                    <span>$22,781</span>
                  </div>
                </div>
              </div>

              {/* Process Button */}
              <button
                onClick={handleDemo}
                disabled={isProcessing}
                className="w-full btn-primary py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>{isProcessing ? "🤖 AI Processing..." : "⚡ Process with AI"}</span>
              </button>

              <p className="text-xs text-gray-500 text-center mt-4">
                Click to see instant data extraction
              </p>
            </div>
          </motion.div>

          {/* Right: Results Area */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-secondary/50 backdrop-blur-sm rounded-xl border border-gray-800 p-8 min-h-[600px]">
              <h3 className="text-xl font-bold mb-6">📊 Extracted & Validated Data</h3>

              {/* Processing Animation */}
              {isProcessing && (
                <div className="flex flex-col items-center justify-center py-20">
                  <div className="relative w-24 h-24 mb-6">
                    <div className="absolute inset-0 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
                    <div className="absolute inset-3 border-4 border-accent-purple/30 border-b-accent-purple rounded-full animate-spin" style={{ animationDirection: "reverse", animationDuration: "1s" }}></div>
                  </div>
                  <div className="space-y-2 text-center">
                    <p className="text-primary font-semibold text-lg">AI Processing Document...</p>
                    <p className="text-gray-400 text-sm">Reading fields</p>
                    <p className="text-gray-400 text-sm">Extracting data</p>
                    <p className="text-gray-400 text-sm">Validating against PO</p>
                  </div>
                </div>
              )}

              {/* Results */}
              {showResults && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-4"
                >
                  {/* Success Banner */}
                  <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mb-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-green-400 text-xl">✓</span>
                        <span className="text-green-400 font-semibold">Processing Complete</span>
                      </div>
                      <span className="text-green-400 text-sm font-mono">{sampleData.processingTime}</span>
                    </div>
                  </div>

                  {/* Extracted Fields */}
                  <div className="space-y-3">
                    <DataField label="Invoice Number" value={sampleData.invoiceNumber} />
                    <DataField label="PO Number" value={sampleData.poNumber} />
                    <DataField label="Vendor" value={sampleData.vendor} />
                    <DataField label="Date" value={sampleData.date} />
                    
                    <div className="border-t border-gray-800 pt-4 mt-4">
                      <p className="text-sm text-gray-400 mb-3 font-semibold">Line Items Extracted:</p>
                      {sampleData.items.map((item, i) => (
                        <div key={i} className="bg-background/50 rounded-lg p-4 mb-3 border border-gray-800">
                          <div className="flex justify-between items-start mb-2">
                            <span className="text-white font-medium">{item.name}</span>
                            <span className="text-primary font-bold">{item.total}</span>
                          </div>
                          <div className="flex justify-between text-sm text-gray-400">
                            <span>Qty: {item.quantity}</span>
                            <span>Unit: {item.unitPrice}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-gray-800 pt-4 mt-4 space-y-2">
                      <DataField label="Subtotal" value={sampleData.subtotal} />
                      <DataField label="Tax (9%)" value={sampleData.tax} />
                      <DataField label="Total Amount" value={sampleData.total} highlighted />
                    </div>
                    
                    <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 mt-6">
                      <div className="flex items-start gap-3">
                        <span className="text-primary text-xl flex-shrink-0">✓</span>
                        <div>
                          <p className="text-primary font-semibold mb-1">Validation Complete</p>
                          <p className="text-sm text-gray-300">{sampleData.validation}</p>
                          <p className="text-xs text-gray-400 mt-2">Cross-referenced with PO-12345. Pricing and quantities match.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Next Action */}
                  <div className="mt-6 pt-6 border-t border-gray-800">
                    <p className="text-sm text-gray-400 mb-3">Next Step:</p>
                    <button className="w-full bg-primary/20 hover:bg-primary/30 border border-primary/50 text-primary py-3 rounded-lg font-semibold transition-all">
                      ✓ Approve & Send to SAP
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Initial State */}
              {!isProcessing && !showResults && (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <div className="text-6xl mb-4 opacity-20">📊</div>
                  <p className="text-gray-500">Process the sample invoice to see extracted data</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function DataField({ label, value, highlighted = false }: { label: string; value: string; highlighted?: boolean }) {
  return (
    <div className={`flex justify-between items-center p-3 rounded-lg ${highlighted ? 'bg-primary/10 border border-primary/30' : 'bg-background/50 border border-gray-800'}`}>
      <span className="text-sm text-gray-400">{label}:</span>
      <span className={`font-semibold ${highlighted ? 'text-primary text-lg' : 'text-white'}`}>{value}</span>
    </div>
  );
}

