import { useState, useRef } from "react";

const THRESHOLD = 300;

function DoubleClickerCounter(){
    const [counter, setCounter] = useState(0);
    let lastClickTime = useRef(0);

    const onClick = () => {
        const isDoubleClick = Date.now() - lastClickTime.current < THRESHOLD;
        if(isDoubleClick){
            setCounter((value) => value + 1);
        }
        else{
            lastClickTime.current = Date.now();
        }
    };

    return (
        <main>
            <p>Counter: {counter}</p>
            <button onClick={onClick}>
                Increment
            </button>
        </main>
    )
}

export default DoubleClickerCounter;