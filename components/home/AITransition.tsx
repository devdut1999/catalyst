"use client";

import { motion } from "framer-motion";

// Neural Network in Action Animation
export default function AITransition() {
  // Define neural network structure - 1 input → hidden layers → 1 output
  const layers = [
    { nodes: 1, x: 20 },   // Input layer (single node)
    { nodes: 5, x: 60 },   // Hidden layer 1
    { nodes: 7, x: 100 },  // Hidden layer 2 (widest)
    { nodes: 5, x: 140 },  // Hidden layer 3
    { nodes: 1, x: 180 },  // Output layer (single node)
  ];

  // Calculate node positions
  const getNodePositions = () => {
    const positions: { x: number; y: number; layer: number; nodeIndex: number }[] = [];
    layers.forEach((layer, layerIndex) => {
      const spacing = 100 / (layer.nodes + 1);
      for (let i = 0; i < layer.nodes; i++) {
        positions.push({
          x: layer.x,
          y: spacing * (i + 1),
          layer: layerIndex,
          nodeIndex: i,
        });
      }
    });
    return positions;
  };

  const nodes = getNodePositions();

  // Generate connections between adjacent layers
  const connections: { from: number; to: number }[] = [];
  nodes.forEach((node, i) => {
    if (node.layer < layers.length - 1) {
      // Connect to all nodes in next layer
      nodes.forEach((targetNode, j) => {
        if (targetNode.layer === node.layer + 1) {
          connections.push({ from: i, to: j });
        }
      });
    }
  });

  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-3xl h-96"
          >
            <svg
              viewBox="0 0 200 100"
              className="w-full h-full"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Connection lines between nodes */}
              {connections.map((conn, i) => (
                <motion.line
                  key={`connection-${i}`}
                  x1={nodes[conn.from].x}
                  y1={nodes[conn.from].y}
                  x2={nodes[conn.to].x}
                  y2={nodes[conn.to].y}
                  stroke="url(#connectionGradient)"
                  strokeWidth="0.3"
                  initial={{ opacity: 0, pathLength: 0 }}
                  animate={{ 
                    opacity: [0.1, 0.3, 0.1],
                    pathLength: 1
                  }}
                  transition={{
                    pathLength: { duration: 1, delay: i * 0.01 },
                    opacity: {
                      duration: 3,
                      delay: i * 0.02,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }
                  }}
                />
              ))}

              {/* Neural network nodes */}
              {nodes.map((node, i) => (
                <g key={`node-${i}`}>
                  {/* Outer activation ring */}
                  <motion.circle
                    cx={node.x}
                    cy={node.y}
                    r="4"
                    fill="none"
                    stroke="#00e5ff"
                    strokeWidth="0.3"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                      opacity: [0.3, 0.8, 0.3],
                      scale: [1, 1.5, 1]
                    }}
                    transition={{
                      duration: 2,
                      delay: node.layer * 0.3 + node.nodeIndex * 0.1,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  />
                  
                  {/* Node body */}
                  <motion.circle
                    cx={node.x}
                    cy={node.y}
                    r="2.5"
                    fill={node.layer === 0 ? "#00e5ff" : node.layer === layers.length - 1 ? "#a855f7" : "#0a0a0f"}
                    stroke={node.layer === 0 || node.layer === layers.length - 1 ? "none" : "#00e5ff"}
                    strokeWidth="0.5"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                      opacity: 1,
                      scale: [1, 1.15, 1]
                    }}
                    transition={{
                      scale: {
                        duration: 1.5,
                        delay: node.layer * 0.3 + node.nodeIndex * 0.1,
                        repeat: Infinity,
                        repeatType: "reverse"
                      },
                      opacity: { duration: 0.5, delay: node.layer * 0.2 }
                    }}
                  />
                </g>
              ))}

              {/* Data signals flowing through network - stay on connection lines */}
              {connections.filter((_, i) => i % 6 === 0).map((conn, i) => {
                const fromNode = nodes[conn.from];
                const toNode = nodes[conn.to];
                
                return (
                  <motion.circle
                    key={`signal-${i}`}
                    r="1.2"
                    fill="#00e5ff"
                    initial={{
                      cx: fromNode.x,
                      cy: fromNode.y,
                      opacity: 0
                    }}
                    animate={{
                      cx: [fromNode.x, toNode.x],
                      cy: [fromNode.y, toNode.y],
                      opacity: [0, 1, 1, 0.5]
                    }}
                    transition={{
                      duration: 1.2,
                      delay: fromNode.layer * 0.4 + i * 0.3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      times: [0, 0.2, 0.8, 1]
                    }}
                  />
                );
              })}

              {/* Layer labels */}
              <text x="20" y="12" fill="#00e5ff" fontSize="5" opacity="0.7" fontWeight="bold" textAnchor="middle">INPUT</text>
              <text x="180" y="12" fill="#a855f7" fontSize="5" opacity="0.7" fontWeight="bold" textAnchor="middle">OUTPUT</text>

              {/* Gradient definitions */}
              <defs>
                <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00e5ff" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#00e5ff" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#a855f7" stopOpacity="0.2" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

