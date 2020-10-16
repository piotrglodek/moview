import { useState } from 'react';

export const useCardImageError = () => {
  const [isError, setError] = useState(false);
  const handleImageError = () => setError(true);
  return [isError, handleImageError];
};
