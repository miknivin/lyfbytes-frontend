// src/components/modals/ImageModal.tsx
import React from "react";

interface ImageModalProps {
  isOpen: boolean;
  imageUrls: string[];
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, imageUrls, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="modal">
      {imageUrls.map((url, index) => (
        <img key={index} src={url} alt={`Image ${index}`} />
      ))}
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default ImageModal;