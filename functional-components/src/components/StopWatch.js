import {useEffect, useState} from "react";

function StopWatch(){
    const [seconds, setSeconds] = useState(0);

    const [showWatch, setShowWatch] = useState(false);

    useEffect(
        () => {
            const interval = setInterval(
                () => setSeconds(() => seconds + 1), 1000
            );
            return () => clearInterval(interval);
        }, [seconds]
    );
    return (
        <div className="container m-2 p-3">
            <button onClick={() => setShowWatch((b) => !b)} className="btn btn-primary">Toggle</button>
            <h1>Seconds { showWatch ? seconds : (
                <strong>
                    Seconds has been hidden...
                </strong>
            ) }</h1>
        </div>

    )
}


export default StopWatch;