// src/components/ImageUploader.jsx
import React, { useState } from 'react';

const ImageUploader = ({ onUpload }) => {
  // State for the selected image
  const [image, setImage] = useState(null);

  // Handle file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // Create a preview URL
    }
  };

  // Handle upload
  const handleUpload = () => {
    if (image) {
      onUpload(image); // Pass the image to the parent component
    }
  };

  return (
    <div className="space-y-4">
      {/* File Input */}
      <FileInput onChange={handleFileChange} />

      {/* Image Preview */}
      {image && <ImagePreview image={image} />}

      {/* Upload Button */}
      <UploadButton onClick={handleUpload} disabled={!image} />
    </div>
  );
};

// File Input Component
const FileInput = ({ onChange }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">
      Upload Proof of Completion
    </label>
    <input
      type="file"
      accept="image/*"
      onChange={onChange}
      className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
    />
  </div>
);

// Image Preview Component
const ImagePreview = ({ image }) => (
  <div className="flex flex-col items-center space-y-2">
    <img src={image} alt="Preview" className="w-48 h-48 object-cover rounded-lg" />
    <p className="text-xs text-gray-600">Image Preview</p>
  </div>
);

// Upload Button Component
const UploadButton = ({ onClick, disabled }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 bg-blue-500 text-white rounded-md transition duration-300 ${
      disabled ? "bg-gray-400 cursor-not-allowed" : "hover:bg-blue-600"
    }`}
    disabled={disabled}
  >
    Upload
  </button>
);

export default ImageUploader;