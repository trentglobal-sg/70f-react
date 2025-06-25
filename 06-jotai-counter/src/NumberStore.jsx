import { atom, useAtom } from "jotai";

// creates an atom
// the atom is the data being shared
export const numberAtom = atom(0);


// a hook in React is to allow share functions
// across one or more components
export const useNumberHook = () => {
    const [number, setNumber] = useAtom(numberAtom);

    const updateNumber = (newNumber) => {
    
        if (!isNaN(newNumber) && newNumber > 0) {
            setNumber(Number(newNumber))
        }
    }

    return {number, updateNumber}
}