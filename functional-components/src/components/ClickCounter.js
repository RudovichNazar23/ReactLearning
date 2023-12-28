import {useState} from "react";

function Counter(){
    const [counter, setCounter] = useState(0);

    return (
        <main>
            <p>Clicks: {counter}</p>
            <button onClick={() => setCounter((value) => value + 1)}>
                Increment
            </button>
        </main>
    );
}

export default Counter;