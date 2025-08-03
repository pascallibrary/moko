import React from 'react';
import ChatInterface from '../components/features/ChatInterface';

const ChatPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-moko-coral">Chat with Moko</h2>
      <p className="text-text-secondary">Hi there! 🌸 I'm Moko, your study buddy! What can I help you learn today?</p>
      <ChatInterface />
    </div>
  );
};

export default ChatPage;