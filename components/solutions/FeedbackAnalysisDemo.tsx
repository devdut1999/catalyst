"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function FeedbackAnalysisDemo() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleDemo = () => {
    setIsAnalyzing(true);
    setShowResults(false);
    
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResults(true);
    }, 2500);
  };

  const sampleReviews = [
    { text: "Great product quality but delivery was delayed by 2 weeks!", sentiment: "mixed" },
    { text: "Product doesn't match description. Very disappointed.", sentiment: "negative" },
    { text: "Amazing! Exactly what I needed and works perfectly.", sentiment: "positive" },
    { text: "Customer service was unhelpful when I had an issue.", sentiment: "negative" },
    { text: "Best purchase I've made. Will definitely buy again!", sentiment: "positive" },
  ];

  const analysisResults = {
    totalAnalyzed: 1247,
    avgSentiment: "72% Positive",
    topComplaints: [
      { issue: "Delivery Delays", count: 127, trend: "↑ 23% this week", priority: "high" },
      { issue: "Customer Support", count: 89, trend: "↓ 12% this week", priority: "medium" },
      { issue: "Product Quality", count: 56, trend: "→ Stable", priority: "medium" },
    ],
    topPraise: [
      { aspect: "Product Quality", count: 342 },
      { aspect: "Fast Delivery", count: 289 },
      { aspect: "Great Support", count: 201 },
    ],
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Before/After Side-by-Side Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="relative">
            <div className="grid md:grid-cols-2 gap-8 relative">
            {/* Manual Process Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* Manual Analysis heading */}
              <h3 className="text-xl md:text-2xl font-bold text-center mb-6 text-gray-400">
                Manual Analysis
              </h3>
              
              <div className="bg-background/60 backdrop-blur-sm rounded-xl border border-gray-700 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-red-500/20 border border-red-500/50 flex items-center justify-center">
                  <span className="text-2xl">👤</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Manual Analysis</h3>
                  <p className="text-sm text-red-400">Slow & incomplete</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-gray-800">
                  <span className="text-gray-400 text-sm">Reviews/Day</span>
                  <div className="flex items-center gap-2">
                    <span className="text-red-400 font-bold">~50</span>
                    <span className="text-red-400 text-xl">✕</span>
                  </div>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-800">
                  <span className="text-gray-400 text-sm">Time Required</span>
                  <div className="flex items-center gap-2">
                    <span className="text-red-400 font-bold">10+ hrs/week</span>
                    <span className="text-red-400 text-xl">✕</span>
                  </div>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-800">
                  <span className="text-gray-400 text-sm">Issue Detection</span>
                  <div className="flex items-center gap-2">
                    <span className="text-red-400 font-bold">Delayed</span>
                    <span className="text-red-400 text-xl">✕</span>
                  </div>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-800">
                  <span className="text-gray-400 text-sm">Trend Tracking</span>
                  <div className="flex items-center gap-2">
                    <span className="text-red-400 font-bold">Manual</span>
                    <span className="text-red-400 text-xl">✕</span>
                  </div>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-gray-400 text-sm">Insights</span>
                  <div className="flex items-center gap-2">
                    <span className="text-red-400 font-bold">Weekly Reports</span>
                    <span className="text-red-400 text-xl">✕</span>
                  </div>
                </div>
              </div>
              </div>
            </motion.div>

            {/* AI Process Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative"
            >
              {/* AI-Powered Analysis heading */}
              <h3 className="text-xl md:text-2xl font-bold text-center mb-6">
                <span className="text-gradient">AI-Powered Analysis</span>
              </h3>
              
              <div className="bg-gradient-to-br from-primary/10 to-accent-purple/10 backdrop-blur-sm rounded-xl border border-primary/30 p-8 relative overflow-hidden">
              {/* Glowing effect */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-accent-purple/20 rounded-full blur-3xl"></div>
              
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center shadow-lg shadow-primary/50">
                  <span className="text-2xl">🤖</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">AI-Powered Analysis</h3>
                  <p className="text-sm text-primary">Fast & comprehensive</p>
                </div>
              </div>

              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between py-3 border-b border-primary/20">
                  <span className="text-gray-300 text-sm">Reviews/Day</span>
                  <div className="flex items-center gap-2">
                    <span className="text-primary font-bold">1,000+</span>
                    <span className="text-green-400 text-xl">✓</span>
                  </div>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-primary/20">
                  <span className="text-gray-300 text-sm">Time Required</span>
                  <div className="flex items-center gap-2">
                    <span className="text-primary font-bold">Real-time</span>
                    <span className="text-green-400 text-xl">✓</span>
                  </div>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-primary/20">
                  <span className="text-gray-300 text-sm">Issue Detection</span>
                  <div className="flex items-center gap-2">
                    <span className="text-primary font-bold">Instant Alerts</span>
                    <span className="text-green-400 text-xl">✓</span>
                  </div>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-primary/20">
                  <span className="text-gray-300 text-sm">Trend Tracking</span>
                  <div className="flex items-center gap-2">
                    <span className="text-primary font-bold">Auto Graphs</span>
                    <span className="text-green-400 text-xl">✓</span>
                  </div>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-gray-300 text-sm">Insights</span>
                  <div className="flex items-center gap-2">
                    <span className="text-primary font-bold">Live Dashboard</span>
                    <span className="text-green-400 text-xl">✓</span>
                  </div>
                </div>
              </div>
              </div>
            </motion.div>

            {/* VS Badge in the middle */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 hidden md:block">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent-purple rounded-full flex items-center justify-center border-4 border-background shadow-2xl shadow-primary/50">
                <span className="text-white font-bold text-lg">VS</span>
              </div>
            </div>
          </div>
          </div>
        </motion.div>

        {/* Dashboard Preview - Glassmorphism Design */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold mb-6 text-center">
            What <span className="text-primary">Management</span> Sees
          </h3>
          
          {/* Bright Glassmorphic Dashboard */}
          <div className="bg-gradient-to-br from-white/5 via-primary/5 to-accent-purple/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 shadow-2xl relative overflow-hidden">
            {/* Glowing orbs */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-purple/30 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                <h4 className="text-2xl font-bold text-white">Customer Insights Dashboard</h4>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  <span className="text-sm text-green-400 font-medium">Live</span>
                </div>
              </div>

              {/* Top Metrics - Bright Cards */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.8 }}
                  className="bg-gradient-to-br from-green-500/20 to-green-500/10 backdrop-blur-sm rounded-xl border border-green-500/40 p-6 text-center shadow-lg shadow-green-500/10"
                >
                  <div className="text-4xl font-extrabold text-green-400 mb-2">72%</div>
                  <div className="text-sm text-gray-300">Positive Sentiment</div>
                  <div className="text-xs text-green-400 mt-1">↑ 3% from last week</div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.9 }}
                  className="bg-gradient-to-br from-primary/20 to-primary/10 backdrop-blur-sm rounded-xl border border-primary/40 p-6 text-center shadow-lg shadow-primary/10"
                >
                  <div className="text-4xl font-extrabold text-primary mb-2">1,247</div>
                  <div className="text-sm text-gray-300">Reviews This Week</div>
                  <div className="text-xs text-primary mt-1">Real-time analysis</div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 1.0 }}
                  className="bg-gradient-to-br from-red-500/20 to-red-500/10 backdrop-blur-sm rounded-xl border border-red-500/40 p-6 text-center shadow-lg shadow-red-500/10"
                >
                  <div className="text-4xl font-extrabold text-red-400 mb-2">3</div>
                  <div className="text-sm text-gray-300">Critical Alerts</div>
                  <div className="text-xs text-red-400 mt-1">Requires action</div>
                </motion.div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Left: Sentiment Trend Chart */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6"
                >
                  <h5 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                    <span className="text-primary">📈</span>
                    Sentiment Trend (Last 7 Days)
                  </h5>
                  {/* Bar Chart Visualization */}
                  <div className="h-40 flex items-end justify-between gap-3 px-2">
                    {[68, 70, 69, 73, 75, 70, 72].map((value, i) => (
                      <motion.div 
                        key={i} 
                        initial={{ height: 0 }}
                        whileInView={{ height: `${value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 1.3 + i * 0.1 }}
                        className="flex-1 flex flex-col items-center gap-2"
                      >
                        <div 
                          className="w-full bg-gradient-to-t from-primary via-primary to-accent-purple rounded-t-lg shadow-lg shadow-primary/30 min-h-[40px]" 
                          style={{ height: `${value}%` }}
                        >
                          <div className="text-xs text-white font-bold text-center pt-1">{value}%</div>
                        </div>
                        <span className="text-xs text-gray-400 font-medium">{['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}</span>
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-4 text-center bg-green-500/10 border border-green-500/30 rounded-lg py-2">
                    <span className="text-sm text-green-400 font-semibold">↑ +4% increase this week</span>
                  </div>
                </motion.div>

                {/* Right: Top Issues with Priority */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6"
                >
                  <h5 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                    <span className="text-red-400">⚠️</span>
                    Priority Issues
                  </h5>
                  <div className="space-y-2">
                    <div className="bg-gradient-to-r from-red-500/20 to-red-500/10 border border-red-500/40 rounded-lg p-3">
                      <div className="flex justify-between items-start mb-1">
                        <span className="text-white font-semibold text-sm">Delivery Delays</span>
                        <span className="text-xs px-2 py-1 bg-red-500/30 text-red-400 rounded">HIGH</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="text-gray-400">127 mentions</span>
                        <span className="text-red-400">↑ 23%</span>
                      </div>
                      <div className="mt-2 w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-red-400 h-full rounded-full" style={{ width: '85%' }}></div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-yellow-500/15 to-yellow-500/5 border border-yellow-500/30 rounded-lg p-3">
                      <div className="flex justify-between items-start mb-1">
                        <span className="text-white font-semibold text-sm">Customer Support</span>
                        <span className="text-xs px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded">MED</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="text-gray-400">89 mentions</span>
                        <span className="text-green-400">↓ 12%</span>
                      </div>
                      <div className="mt-2 w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-yellow-400 h-full rounded-full" style={{ width: '60%' }}></div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-yellow-500/15 to-yellow-500/5 border border-yellow-500/30 rounded-lg p-3">
                      <div className="flex justify-between items-start mb-1">
                        <span className="text-white font-semibold text-sm">Product Quality</span>
                        <span className="text-xs px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded">MED</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="text-gray-400">56 mentions</span>
                        <span className="text-gray-400">→ Stable</span>
                      </div>
                      <div className="mt-2 w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-yellow-400 h-full rounded-full" style={{ width: '45%' }}></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* AI Recommendation - Bright Callout */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.3 }}
                className="mt-6 bg-gradient-to-r from-primary/20 via-accent-purple/20 to-primary/20 backdrop-blur-sm border border-primary/40 rounded-xl p-6 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent-purple/10"></div>
                <div className="flex items-start gap-4 relative z-10">
                  <div className="w-12 h-12 bg-primary/30 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-primary/50">
                    <span className="text-2xl">💡</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-primary font-bold text-lg mb-2">AI Recommendation</p>
                    <p className="text-gray-200">
                      <strong className="text-white">Priority Action:</strong> Address delivery delays immediately. 
                      Contact logistics team - this issue is trending up 23% this week and impacting customer satisfaction.
                    </p>
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
            Analyze sample customer feedback and see AI-powered insights instantly
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left: Sample Reviews */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-secondary/50 backdrop-blur-sm rounded-xl border border-gray-800 p-8">
              <h3 className="text-xl font-bold mb-6">💬 Customer Feedback</h3>
              
              {/* Sample Reviews */}
              <div className="space-y-3 mb-6 max-h-96 overflow-y-auto">
                {sampleReviews.map((review, i) => (
                  <div key={i} className="bg-background/50 rounded-lg p-4 border border-gray-700">
                    <p className="text-sm text-gray-300 mb-2">{review.text}</p>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs px-2 py-1 rounded ${
                        review.sentiment === 'positive' ? 'bg-green-500/20 text-green-400' :
                        review.sentiment === 'negative' ? 'bg-red-500/20 text-red-400' :
                        'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {review.sentiment}
                      </span>
                    </div>
                  </div>
                ))}
                <div className="bg-gradient-to-r from-primary/10 to-transparent rounded-lg p-3 border border-primary/30">
                  <p className="text-sm text-primary">+ 1,242 more reviews...</p>
                </div>
              </div>

              {/* Analyze Button */}
              <button
                onClick={handleDemo}
                disabled={isAnalyzing}
                className="w-full btn-primary py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>{isAnalyzing ? "🤖 AI Analyzing..." : "🧠 Analyze All Feedback"}</span>
              </button>

              <p className="text-xs text-gray-500 text-center mt-4">
                AI will analyze 1,247 reviews in seconds
              </p>
            </div>
          </motion.div>

          {/* Right: Analysis Results */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-secondary/50 backdrop-blur-sm rounded-xl border border-gray-800 p-8 min-h-[600px]">
              <h3 className="text-xl font-bold mb-6">📈 AI Insights Dashboard</h3>

              {/* Analyzing Animation */}
              {isAnalyzing && (
                <div className="flex flex-col items-center justify-center py-20">
                  <div className="relative w-24 h-24 mb-6">
                    <div className="absolute inset-0 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
                  </div>
                  <div className="space-y-2 text-center">
                    <p className="text-primary font-semibold text-lg">Analyzing Sentiment...</p>
                    <p className="text-gray-400 text-sm">Processing 1,247 reviews</p>
                    <p className="text-gray-400 text-sm">Detecting topics & issues</p>
                    <p className="text-gray-400 text-sm">Prioritizing by impact</p>
                  </div>
                </div>
              )}

              {/* Results Dashboard */}
              {showResults && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  {/* Overall Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-primary mb-1">{analysisResults.totalAnalyzed}</div>
                      <div className="text-xs text-gray-400">Reviews Analyzed</div>
                    </div>
                    <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-green-400 mb-1">{analysisResults.avgSentiment}</div>
                      <div className="text-xs text-gray-400">Overall Sentiment</div>
                    </div>
                  </div>

                  {/* Top Complaints (Priority Issues) */}
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                      <span className="text-red-400">⚠️</span>
                      Top Issues (Action Required)
                    </h4>
                    <div className="space-y-2">
                      {analysisResults.topComplaints.map((complaint, i) => (
                        <div key={i} className={`rounded-lg p-4 border ${
                          complaint.priority === 'high' 
                            ? 'bg-red-500/10 border-red-500/30' 
                            : 'bg-yellow-500/10 border-yellow-500/30'
                        }`}>
                          <div className="flex items-start justify-between mb-2">
                            <span className="font-semibold text-white">{complaint.issue}</span>
                            <span className={`text-xs px-2 py-1 rounded ${
                              complaint.priority === 'high'
                                ? 'bg-red-500/20 text-red-400'
                                : 'bg-yellow-500/20 text-yellow-400'
                            }`}>
                              {complaint.priority}
                            </span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-400">{complaint.count} mentions</span>
                            <span className={`text-xs ${complaint.trend.includes('↑') ? 'text-red-400' : complaint.trend.includes('↓') ? 'text-green-400' : 'text-gray-400'}`}>
                              {complaint.trend}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Top Praise */}
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                      <span className="text-green-400">✨</span>
                      What Customers Love
                    </h4>
                    <div className="space-y-2">
                      {analysisResults.topPraise.map((praise, i) => (
                        <div key={i} className="bg-green-500/10 border border-green-500/30 rounded-lg p-3 flex justify-between items-center">
                          <span className="text-gray-300 text-sm">{praise.aspect}</span>
                          <span className="text-green-400 font-semibold text-sm">{praise.count} mentions</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Recommendation */}
                  <div className="bg-gradient-to-r from-primary/10 to-accent-purple/10 border border-primary/30 rounded-lg p-4 mt-6">
                    <div className="flex items-start gap-3">
                      <span className="text-primary text-xl flex-shrink-0">💡</span>
                      <div>
                        <p className="text-primary font-semibold mb-2">AI Recommendation:</p>
                        <p className="text-sm text-gray-300">Priority: Address delivery delays immediately. Contact logistics team. This issue is trending up 23% this week.</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Initial State */}
              {!isAnalyzing && !showResults && (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <div className="text-6xl mb-4 opacity-20">🤖</div>
                  <p className="text-gray-500">Click "Analyze" to see AI-powered insights</p>
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

