import React, { useState, useEffect } from 'react';

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
  width?: number | string;
  height?: number | string;
}

/**
 * A component that handles image loading with fallbacks and different loading strategies
 * based on the image source type (local, external, etc.)
 */
const Image: React.FC<ImageProps> = ({
  src,
  alt,
  className = '',
  fallbackSrc = 'https://via.placeholder.com/400x300/e2e8f0/64748b?text=Image',
  width,
  height,
}) => {
  const [imgSrc, setImgSrc] = useState<string>(src);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);

  // Reset state when src changes
  useEffect(() => {
    setImgSrc(src);
    setIsLoading(true);
    setHasError(false);
  }, [src]);

  // Handle image loading error
  const handleError = () => {
    setHasError(true);
    setImgSrc(fallbackSrc);
  };

  // Handle image load success
  const handleLoad = () => {
    setIsLoading(false);
  };

  // Determine if the image is an external URL
  const isExternalUrl = (url: string): boolean => {
    return url.startsWith('http://') || url.startsWith('https://');
  };

  // Determine the final image source based on the original source type
  const getImageSource = (): string => {
    if (hasError) return fallbackSrc;
    
    // If it's an external URL, use it directly
    if (isExternalUrl(imgSrc)) return imgSrc;
    
    // For local images, try different approaches
    try {
      // For Vite, try to use the import.meta.url approach
      const baseUrl = import.meta.url;
      const resolvedUrl = new URL(imgSrc, baseUrl).href;
      return resolvedUrl;
    } catch (error) {
      // Fallback to direct path for public directory
      if (imgSrc.startsWith('/')) return imgSrc;
      return `/${imgSrc}`;
    }
  };

  return (
    <div className={`relative ${isLoading ? 'bg-gray-200 animate-pulse' : ''} ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <img
        src={getImageSource()}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        onError={handleError}
        onLoad={handleLoad}
        style={{ width, height }}
      />
    </div>
  );
};

export default Image;
