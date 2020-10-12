import React from 'react';
import { Navigation } from './components/Navigation';
import { Providers } from './Providers';

function App() {
  return (
    <Providers>
      <Navigation />
    </Providers>
  );
}

export default App;
