
import { useState, useEffect } from "react";
import { useNumberHook } from "./NumberStore";

export default function AdjustNumber() {

    const { number, updateNumber } = useNumberHook();
    const [inputNumber, setInputNumber] = useState(number);

    // when the value of the numberAtom changes,
    // update the inputNumber to match
    useEffect(()=>{
        setInputNumber(number);
    }, [number]);

    return (<>
        <input type="text"
            value={inputNumber}
            onChange={(e) => {
                setInputNumber(e.target.value)
            }}

        />
        <button onClick={()=>{
            updateNumber(inputNumber)
        }}>Update</button>
    </>)
}