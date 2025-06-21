import { useState } from "react"

export default function App() {

  // the parameter for useState is the default value
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [age, setAge] = useState('1')
  const [submitted, setSubmitted] = useState(false)
  const [units, setUnits] = useState("metric");

  // const [bmi, setBmi] = useState(0); // <-- derived values not a good candidate for a state

  // all event handler functions MUST be arrow functions
  // the first parameter of an event handling function is event
  const updateWeight = (event) => {
    // the event object contains information about the event
    setWeight(event.target.value);
  }

  const renderBMI = () => {
    if (height >= 1) {
      return weight / height ** 2;  // <-- calculate the BMI when we need it
    } else {
      return 0;
    }
  }

  return (<>
    <h1>BMI Calculator</h1>
    <div>
      <label>Weight:</label>
      <input type="text" value={weight} onChange={updateWeight} />
    </div>
    <div>
      <label>Height:</label>
      <input type="text" value={height} onChange={(event) => {
        setHeight(event.target.value)
      }} />
    </div>
    <div>
      <label>Age:</label>
      <input type="text" value={age} onChange={evt => setAge(evt.target.value)} />
    </div>

    <div>
      <label>Units</label>
      <input type="radio" 
             value="metric"
             name="units" 
             onChange={(e) => { setUnits(e.target.value) }}
             checked={units === "metric"}
      /><label>Metric</label>
      <input type="radio"
             value="imperial"
             name="units" 
             onChange={e => setUnits(e.target.value)}
             checked={units === "imperial"}
      /><label>Imperial</label>
    </div>

    {
      submitted ? <div>BMI = {renderBMI()}</div> : null
    }

    {
      submitted && <div>BMI = {renderBMI()}</div>
    }

    <button onClick={() => {
      setSubmitted(true);
    }}>Calculate</button>
  </>)
}