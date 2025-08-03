import React from 'react';
import FileUploadZone from '../components/features/FileUploadZone';
import FlashcardGenerator from '../components/features/FlashcardGenerator';

const FileUploadPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-moko-coral">Upload & Learn</h2>
      <p className="text-text-secondary">Drop your study materials here. Moko will help you learn!</p>
      <FileUploadZone />
      <FlashcardGenerator />
    </div>
  );
};

export default FileUploadPage;