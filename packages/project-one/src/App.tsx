import React, { useState } from 'react';
import './App.css';
import { Button } from '@workspace/my-app';

function App() {
  const [count, setCount] = useState(0);
  console.log(Button);
  return (
    <div className='App'>
      <header className='App-header'>
        Your count is {count}
        <Button
          onClick={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
      </header>
    </div>
  );
}

export default App;
