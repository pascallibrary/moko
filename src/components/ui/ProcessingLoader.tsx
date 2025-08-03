import React from 'react';
import { motion } from 'framer-motion';

const ProcessingLoader: React.FC = () => {
  return (
    <motion.div
      className="flex items-center justify-center space-x-2"
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 2 }}
    >
      <img src="/assets/moko.png" alt="Moko Loading" className="w-8 h-8" />
      <p className="text-text-secondary">Moko is generating your flashcards...</p>
    </motion.div>
  );
};

export default ProcessingLoader;