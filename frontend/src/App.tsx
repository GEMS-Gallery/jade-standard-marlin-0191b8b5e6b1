import React, { useState } from 'react';
import { backend } from 'declarations/backend';

const App = () => {
  const [greeting, setGreeting] = useState('');

  const handleGreet = async () => {
    try {
      const result = await backend.greet('World');
      setGreeting(result);
    } catch (error) {
      console.error('Error calling greet:', error);
      setGreeting('Error: Failed to greet');
    }
  };

  return (
    <div>
      <h1>Internet Computer App</h1>
      <button onClick={handleGreet}>Greet</button>
      <p>{greeting}</p>
    </div>
  );
};

export default App;
