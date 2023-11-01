import React, { useState, useRef } from 'react';

function BoxCreator() {
  const [width, setwidth] = useState(0);
  const [height, setheight] = useState(0);
  const boxRef = useRef(null);

  const createBox = () => {
    boxRef.current.style.width = `${width}px`;
    boxRef.current.style.height = `${height}px`;
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Enter a Width Value"
        value={width}
        onChange={(e) => setwidth(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter a Height Value"
        value={height}
        onChange={(e) => setheight(e.target.value)}
      />
      <button onClick={createBox}>Create a Box</button>
      <div ref={boxRef} style={{ border: '1px solid black' }}></div>
    </div>
  );
}

export default BoxCreator;