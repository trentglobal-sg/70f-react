
// import { numberAtom } from './NumberStore';
// import { useAtom } from 'jotai';

import { useNumberHook } from "./NumberStore"

export default function Counter() {
    // const [number, setNumber] = useAtom(numberAtom);
    const {number, updateNumber} = useNumberHook();

    return (<>
    <div style={{width:"100px", height:"30px", backgroundColor:"gray"}}>
        <p style={{textAlign:"center"}}>{number}</p>
    </div>
    <button
     onClick={()=>{
        updateNumber(number + 1)
     }}
    >+</button>
    </>)
}