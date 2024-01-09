import {useState, useEffect} from "react";

function CountDown(){
    const [seconds, setSeconds] = useState(10);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(
        () => {
            if(!isRunning){
                return;
            }

            const interval = setInterval(
                () => {
                    if(seconds <= 0){
                        return setIsRunning(() => false);
                    }
                    else{
                        return setSeconds(() => seconds - 1);
                    }
                }, 1000
            );

            return () => clearInterval(interval);
        }, 
        [isRunning, seconds]
    ); 

    return (
        <div>
            <h2>
                {seconds}
            </h2>
            <hr />
            <div className="p- m-2">
                <button className="btn btn-info m-1" onClick={() => setSeconds(() => 10)}>
                    Reset
                </button>
                    {
                        isRunning ? (
                            <button className="btn btn-danger" onClick={() => setIsRunning(false)}> Pause </button>
                        ) : (
                            <button className="btn btn-success" onClick={() => setIsRunning(true)} disabled={seconds === 0}>Continue</button>
                        )
                    }
            </div>
        </div>
    );
};

export default CountDown;