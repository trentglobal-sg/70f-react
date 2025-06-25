import AdjustNumber from "./AdjustNumber";
import Counter from "./Counter";
import { numberAtom } from "./NumberStore";
import { useAtom } from "jotai";

export default function App() {

  const [number, _] = useAtom(numberAtom);

  return <>
    <h1>App</h1>
    <Counter />
    <div>
      Current Number: {number}
    </div>
    <div>
      <AdjustNumber />
    </div>
  </>
}