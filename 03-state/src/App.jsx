// create a useState hook?
// a hook is a way to add new functionality to your React component
// a hook usually return a function and/or a value

import { useState } from 'react';

export default function App() {

  console.log("App is rendering");

  // useState allows us to create a 'private member variable' for your component
  // a state variable is a piece of data that the component can remeber
  const [number, setNumber] = useState(100);

  const [color, setColor] = useState("#6eb881");

  // 1. useState => creates a variable for the App component 
  // 2. the parameter of useState is the default vaule
  // 3. useState will return an array with two elements
  //   - the first element is the CURRENT value
  //   - the second element is a function to change the value

  const clickRedButton = () => {
    //color = "red"; // <-- React won't be able to detect the change
    setColor("red");
  }

  return <>
    <h1>Number Clicker</h1>
    <button onClick={clickRedButton}>Red</button>
    <button onClick={()=>{
      setColor("green")
    }}>Green</button>
    <p style={{ "color": color, "fontSize": "64px" }}> {number}</p>
    <p>The current color is {color}</p>
  </>
}