import { useState, useEffect } from "react";

function MouseMoving(){
    const [isMoving, setMoving] = useState(false);
    const onMouseMoveHandler = () => setMoving(true);

    useEffect(
        () => {
            if(!isMoving) return;
            const timeout = setTimeout(() => setMoving(false), 500);

            return () => clearTimeout(timeout);
        }, [isMoving]
    );

    return (
        <section onMouseMove={onMouseMoveHandler}>
            <h2>
                The mouse is {!isMoving && "not"} moving: {isMoving ? "V" : "X"}
            </h2>
        </section>
    )
}

export default MouseMoving;
