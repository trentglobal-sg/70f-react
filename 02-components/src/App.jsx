import "./App.css";
// import "bootstrap/dist/css/bootstrap.css" --> if you have done "npm install bootstrap"

import Alert from "./Alert"

export default function App() {
  return (<>
    <h1>Test</h1>
    {sayHello()}
    <SayGoodbye></SayGoodbye>
    <SayGoodbye></SayGoodbye>
    <Alert msg="Guard Dog in Premise"/>
    <Alert msg="Your withdrawal amount exceeds your balance"/>
    
  </>)
}


function sayHello() {
  return <h1>Hello World</h1>
}

// Component = reusable JSX
// A component is a function
// The first Alphabet must be Uppercase
// MUST return JSX
function SayGoodbye() {
  return (<>
   <h3>Goodbye world</h3>
   <p>Lorem ispum...</p>
  </>)
}

