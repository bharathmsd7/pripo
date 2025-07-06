'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Rocket, Zap, Code, Cpu, Server } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const techIcons = [
  { icon: <Cpu className="h-6 w-6" />, delay: 0 },
  { icon: <Code className="h-6 w-6" />, delay: 0.2 },
  { icon: <Server className="h-6 w-6" />, delay: 0.4 },
  { icon: <Zap className="h-6 w-6" />, delay: 0.6 },
];

export default function ComingSoon() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center p-6 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.03\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <motion.div 
        className="w-full max-w-2xl bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden shadow-2xl"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.div 
          className="p-8 md:p-12 text-center"
          variants={fadeInUp}
        >
          <motion.div 
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 mb-6 mx-auto"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 200,
              damping: 15,
              delay: 0.3
            }}
          >
            <Zap className="h-10 w-10 text-white" />
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Pripo
          </motion.h1>
          
          <motion.p 
            className="text-xl text-gray-300 mb-8 max-w-lg mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            We&apos;re building the future of technology
          </motion.p>
          
          <motion.div 
            className="relative mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: '75%' }}
                transition={{ 
                  duration: 2, 
                  ease: 'easeInOut',
                  repeat: Infinity,
                  repeatType: 'reverse'
                }}
              />
            </div>
            <div className="absolute -bottom-8 left-0 right-0 text-sm text-gray-400">
              Launching in Q4 2025
            </div>
          </motion.div>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-10"
            variants={staggerContainer}
          >
            {techIcons.map((item, index) => (
              <motion.div
                key={index}
                className="p-4 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors"
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  transition: { 
                    delay: 0.5 + (index * 0.1),
                    type: 'spring',
                    stiffness: 300,
                    damping: 15
                  }
                }}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="text-blue-400">
                  {item.icon}
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-medium hover:opacity-90 transition-opacity flex items-center mx-auto">
              <Rocket className="mr-2 h-4 w-4" />
              Join the Waitlist
            </button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="p-4 text-center text-sm text-gray-400 border-t border-white/5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {new Date().getFullYear()} Pripo Technologies. All rights reserved.
        </motion.div>
      </motion.div>
    </div>
  );
}
