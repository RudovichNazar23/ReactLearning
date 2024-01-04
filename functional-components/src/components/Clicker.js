import {useState, useEffect} from "react";

function Clicker(){
    const [counter,setCount] = useState(0);

    useEffect(() => {
        console.log("The counter is ", counter);

        return () => console.log("I am being cleaned up...");
    }, [counter])

    return (
        <div className="container d-flex flex-column p-2 m-2">
            <p>{counter}</p>
            <div className="container d-flex flex-row p-2 m-2">
                <button onClick={() => setCount(() => counter + 1)} className="btn btn-primary m-1">Increment</button>
                <button onClick={() => setCount(() => counter - 1)} className="btn btn-danger m-1">Dicrement</button>
            </div>
        </div>
    )
}

export default Clicker;