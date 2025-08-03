import React from 'react';
import { motion } from 'framer-motion';

const MokoAvatar: React.FC = () => {
  return (
    <motion.img
      src="/assets/moko.png"
      alt="Moko"
      className="w-8 h-8"
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ repeat: Infinity, duration: 2 }}
    />
  );
};

export default MokoAvatar;