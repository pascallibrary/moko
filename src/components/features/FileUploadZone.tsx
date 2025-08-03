import React, { useCallback } from 'react';
import { useDropzone, DropzoneOptions } from 'react-dropzone';
import { motion, HTMLMotionProps } from 'framer-motion';
import type { HTMLAttributes } from 'react';

const FileUploadZone: React.FC = () => {
  const onDrop = useCallback((acceptedFiles: File[], fileRejections: any[]) => {
    if (fileRejections.length > 0) {
      console.error('File rejected:', fileRejections);
      alert('Some files were rejected. Please upload valid PDFs or images.');
      return;
    }
    console.log('Files accepted:', acceptedFiles);
    // Integrate with AI backend to process files (PDFs, images, etc.)
  }, []);

  const dropzoneOptions: DropzoneOptions = {
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'image/*': ['.png', '.jpg', '.jpeg']
    },
    maxFiles: 5,
    maxSize: 10 * 1024 * 1024 // 10MB
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone(dropzoneOptions);

  // Explicitly pick compatible props for motion.div
  const { onClick, onDrop: _onDrop, onDragOver, onDragEnter, onDragLeave } = getRootProps();
  const rootProps: HTMLMotionProps<'div'> = {
    onClick,
    onDragOver,
    onDragEnter,
    onDragLeave
  };

  return (
    <motion.div
      {...rootProps}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300 }}
      role="button"
      aria-label="File upload zone"
      aria-describedby="upload-instructions"
      className={`border-2 border-dashed border-moko-teal rounded-lg p-6 text-center transition-colors ${
        isDragActive ? 'bg-moko-teal bg-opacity-10' : 'bg-white'
      }`}
    >
      <input {...getInputProps()} />
      <p id="upload-instructions" className="text-lg font-medium text-text-secondary">
        {isDragActive
          ? 'Drop your files here!'
          : 'Drag & drop your study materials or click to select'}
      </p>
      <p className="text-sm text-text-secondary mt-2">
        Accepted formats: PDF, PNG, JPG. Max 5 files, 10MB each.
      </p>
    </motion.div>
  );
};

export default FileUploadZone;