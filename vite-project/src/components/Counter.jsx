import { useRef, useState } from "react";
console.log('before counter');
const Counter = () => {
    let [number, setNumber] = useState(0);
    // let num = 0;
    let num = useRef(0);
    console.log(num);
    const handleClick = () => {
        setNumber(number => number + 1);
        setNumber(number => number + 1);
        setNumber(number => number + 1);
        num.current++;
        console.log(number);
        console.log(num.current);
    }
    return (
        <div>
            <h1>Tasleem:{number}</h1>
            <button onClick={handleClick}>Add</button>
        </div>
    )
}

export default Counter
