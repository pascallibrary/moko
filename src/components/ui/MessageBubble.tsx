import React from 'react';
import { motion } from 'framer-motion';

interface MessageBubbleProps {
  text: string;
  isUser: boolean;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ text, isUser }) => {
  return (
    <motion.div
      className={`p-3 rounded-lg max-w-xs ${
        isUser ? 'bg-moko-teal text-white ml-auto' : 'bg-moko-pink text-white'
      }`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {text}
    </motion.div>
  );
};

export default MessageBubble;