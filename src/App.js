import React, { useState } from "react";
import "./styles.css";


console.log("hello");

const App = () => {
  const purple = "#8e44ad";
  const [bg, setBg] = useState(purple); 
  const [name, setName] = useState("click Me")

  const bgChange = () => {
    // console.log("clicked");
    let newBg = "#34495e" 
    setBg(newBg);
    setName('Ouch!! :wolf');
  };

  const bgBack = () => { 
    setBg(purple);
    setName('Ayyo!! :angery');
  };

  return (
    <>
      {/* <div style={{ backgroundColor: bg }}>
        <button onClick={bgChange} onDoubleClick={bgBack}> 
          {name} 
        </button>
      </div> */}
      <div style={{ backgroundColor: bg }}>
        <button onMouseEnter={bgChange} onMouseLeave={bgBack}> 
          {name} 
        </button>
      </div>
    </>
  );
}
export default App;