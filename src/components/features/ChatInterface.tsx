import React, { useState, useRef, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { motion } from 'framer-motion';
import MessageBubble from '../ui/MessageBubble';
import MokoAvatar from '../ui/MokoAvatar';

interface ChatForm {
  message: string;
}

interface Message {
  id: number;
  text: string;
  isUser: boolean;
}

const ChatInterface: React.FC = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ChatForm>({
    defaultValues: { message: '' }
  });
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: 'Hi there! 🌸 I’m Moko, your study buddy! What can I help you learn today?', isUser: false }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to the latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const onSubmit: SubmitHandler<ChatForm> = (data) => {
    if (!data.message.trim()) return; // Prevent empty messages
    const newMessage: Message = {
      id: messages.length + 1,
      text: data.message,
      isUser: true
    };
    setMessages((prev) => [...prev, newMessage]);
    // Mock AI response (replace with actual AI integration)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          text: `Of course! Let me create some flashcards for "${data.message}"!`,
          isUser: false
        }
      ]);
    }, 500);
    reset();
  };

  return (
    <div
      className="bg-white rounded-lg shadow-md p-4 h-96 flex flex-col"
      role="region"
      aria-label="Chat with Moko"
    >
      <div className="flex-1 overflow-y-auto space-y-4 p-2" role="log" aria-live="polite">
        {messages.map((msg) => (
          <MessageBubble key={msg.id} text={msg.text} isUser={msg.isUser} />
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-4 flex items-center space-x-2"
        aria-label="Chat input form"
      >
        <MokoAvatar />
        <input
          {...register('message', { required: 'Message cannot be empty' })}
          className="flex-1 p-2 border border-moko-teal rounded-lg focus:outline-none focus:ring-2 focus:ring-moko-coral"
          placeholder="Ask Moko anything..."
          aria-invalid={errors.message ? 'true' : 'false'}
          aria-describedby="message-error"
        />
        {errors.message && (
          <span id="message-error" className="text-sm text-moko-coral">
            {errors.message.message}
          </span>
        )}
        <motion.button
          type="submit"
          className="bg-moko-coral text-white px-4 py-2 rounded-lg hover:bg-moko-pink focus:ring-2 focus:ring-moko-coral"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Send message"
        >
          Send
        </motion.button>
      </form>
    </div>
  );
};

export default ChatInterface;