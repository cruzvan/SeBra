

import React, { useRef, useEffect } from 'react';

interface AnimatedMediaProps {
  src: string;
  className?: string;
  isHovered?: boolean;
}

const AnimatedMedia: React.FC<AnimatedMediaProps> = ({ src, className = '', isHovered }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isHovered) {
        videoRef.current.play().catch(error => {
          // Autoplay was prevented. We can safely ignore this error for hover-initiated playback.
          console.warn("Video play interrupted:", error);
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [isHovered]);

  return (
    <video
      ref={videoRef}
      className={className}
      src={src}
      loop
      muted
      playsInline
      preload="metadata"
    >
      Your browser does not support the video tag.
    </video>
  );
};

export default AnimatedMedia;