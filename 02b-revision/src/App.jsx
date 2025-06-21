import Alert from "./Alert";
import SumOfTwo from "./SumOfTwo";

// Components are the building blocks of a React application

// FIRST LESSON: Components
// 1. It's a function
// 2. The first alphabet of the function is upper case
// 3. Return JSX
export default function App() {
  return (<>
     <h1>Welcome</h1>

     {/* 2. JSX expressions */}
     <p>Today is {new Date().toString()}</p>

     {/* 3 Create an instance of the Alert component */}
     <Alert message="Hello World" color="green"/>

    {/* When sendign data besides STRING as props, use { } */}
    <SumOfTwo n1={3} n2={7}/>
    <SumOfTwo n1={10} n2={11}/>
    <SumOfTwo n1={44} n2={33}/>
  </>)
}