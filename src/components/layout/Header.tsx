import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  return (
    <header className="bg-moko-pink text-white p-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-2"
        >
          <img src="/assets/moko.png" alt="Moko" className="w-10 h-10" />
          <h1 className="text-2xl font-semibold">Molekul</h1>
        </motion.div>
        <nav>
          <Link to="/" className="mr-4 hover:underline">Upload</Link>
          <Link to="/chat" className="hover:underline">Chat with Moko</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;