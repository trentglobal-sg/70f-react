
import { useState } from "react";
import { useNumberHook } from "./NumberStore";

export default function AdjustNumber() {



    const { number, updateNumber } = useNumberHook();
    const [inputNumber, setInputNumber] = useState(number);

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