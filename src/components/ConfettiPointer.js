import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';

// Notes:
// zIndex doesn't work!
// - use this site to see Docs: https://www.npmjs.com/package/react-dom-confetti

const ConfettiPointer = ({ active, numberOfPieces, gravity, wind, zIndex }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <Confetti
      width={window.innerWidth}
      height={window.innerHeight}
      confettiSource={position}
      recycle={true} 
      run={active}

    //   controllable parts...
      numberOfPieces={numberOfPieces || 100}
      gravity={gravity || 0.1}
      wind={wind || 0.05}
      zIndex={zIndex || 1}
    />
  );
};

export default ConfettiPointer;
