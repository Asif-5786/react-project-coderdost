import { useRef, useState } from "react";
const Counter = () => {
    console.log('i am counter')
    let [number, setNumber] = useState(0);
    // let num = 0;
    let num = useRef(0);

    const handleClick = () => {
        setNumber(number => number + 1);
        setNumber(number => number + 1);
        setNumber(number => number + 1);
        num.current++;
        // num++;
        // console.log(num++);
    }
    return (
        <div>
            <h1>Tasleem:{number}</h1>
            <button onClick={handleClick}>Add</button>
        </div>
    )
}

export default Counter
