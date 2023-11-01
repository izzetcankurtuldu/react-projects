import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [timer, setTimer] = useState(10);

  useEffect(() => {

    if (timer !== 0) {
      const interval = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);

      return () => clearInterval(interval);
    }

  }, [timer])


  return (<>

    <div className='App'>

      <div style={{ height: "250px", width: "250px", backgroundColor: "red", borderRadius: "50%", color: "white", fontSize: "60px", margin: "50px auto", lineHeight:"250px" }}>{timer}</div>

    </div>

  </>

  );
}

export default App;
