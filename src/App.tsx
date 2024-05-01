import { useState } from 'react';
import './App.css';

function App() {
  const [flipped, setFlipped] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onFlip = () => {
    if (!isLoading) {
      setIsLoading(true);
      setFlipped((prev) => !prev);

      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    }
  };

  return (
    <div
      className={`card-container ${isLoading ? 'disabled' : ''}`}
      onClick={onFlip}
    >
      <div className={`card ${flipped ? 'flipped' : ''}`}>
        <div className="front">
          <img src="/front.webp" alt="앞면" width="200" height="290" />
        </div>
        <div className="back">
          <img src="/back.webp" alt="뒷면" width="200" height="290" />
        </div>
      </div>
    </div>
  );
}

export default App;
