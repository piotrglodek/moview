import { useState } from 'react';

export function useToggleMenu() {
  const [isOpen, setOpen] = useState(false);
  const toggleMenu = () => setOpen(prevState => !prevState);
  return [isOpen, toggleMenu];
}
