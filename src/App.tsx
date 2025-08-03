import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FileUploadPage from './pages/FileUploadPage';
import ChatPage from './pages/ChatPage';
import Header from './components/layout/Header';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-soft-background">
      <Header />
      <main className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<FileUploadPage />} />
          <Route path="/chat" element={<ChatPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;