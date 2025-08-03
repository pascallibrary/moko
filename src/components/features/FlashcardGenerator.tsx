import React from 'react';
import { motion } from 'framer-motion';
import ProcessingLoader from '../ui/ProcessingLoader';

const FlashcardGenerator: React.FC = () => {
  // Mock flashcards (replace with AI-generated data)
  const flashcards = [
    { question: 'What is photosynthesis?', answer: 'The process by which plants make food using sunlight.' },
    { question: 'What is chlorophyll?', answer: 'A green pigment in plants that absorbs sunlight.' },
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-moko-coral">Generated Flashcards</h3>
      {flashcards.length === 0 ? (
        <ProcessingLoader />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {flashcards.map((card, index) => (
            <motion.div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <p className="font-semibold">{card.question}</p>
              <p className="text-text-secondary">{card.answer}</p>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FlashcardGenerator;