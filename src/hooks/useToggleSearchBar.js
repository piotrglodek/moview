import { useState, useEffect } from 'react';

export function useToggleSearchBar() {
  const [isVisible, setVisible] = useState(false);
  const openSearchBar = () => setVisible(true);
  const closeSearchBar = () => setVisible(false);

  useEffect(() => {
    const handleBodyScroll = () => {
      isVisible
        ? (document.body.style.overflow = 'hidden')
        : (document.body.style.overflow = 'auto');
    };
    handleBodyScroll();
  }, [isVisible]);
  return [isVisible, openSearchBar, closeSearchBar];
}
