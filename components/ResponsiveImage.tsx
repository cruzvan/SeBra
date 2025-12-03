
import React from 'react';
import { ResponsiveImage as ResponsiveImageType } from '../types';

interface ResponsiveImageProps {
  image: ResponsiveImageType;
  aspectRatio?: string;
  className?: string;
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({ image, aspectRatio, className = '' }) => {
  if (!image || !image.src) {
    // Return a placeholder or null if image data is missing to prevent crashes
    return <div className={`bg-gray-800 ${className}`} style={aspectRatio ? { aspectRatio } : {}} />;
  }

  return (
    <img
      src={image.src}
      alt={image.alt}
      loading="lazy"
      className={className}
      style={aspectRatio ? { aspectRatio } : {}}
    />
  );
};

export default ResponsiveImage;