import { useState } from 'react';

export const useImageError = () => {
  const [isError, setError] = useState(false);
  const handleImageError = () => setError(true);
  return [isError, handleImageError];
};
