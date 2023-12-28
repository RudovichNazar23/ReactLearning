import { Fragment, useState } from "react";

function Calculator({a, b}){
    const PLUS = (a, b) => a + b;
    const MINUS = (a, b) => a - b;
    const MULTIPLY = (a, b) => a * b;
    const RESET = () => 0;

    const [operator, setOperator] = useState(() => PLUS);

    return (
        <main>
            <button onClick={() => setOperator(() => PLUS)} className="m-2 p-2">
                Plus
            </button>
            <button onClick={() => setOperator(() => MINUS)} className="m-2 p-2">
                Minus
            </button>
            <button onClick={() => setOperator(() => MULTIPLY)} className="m-2 p-2">
                Multiply
            </button>
            <button onClick={() => setOperator(() => RESET)} className="m-2 p-2">
                Reset
            </button>
            <Fragment>
                <p>
                    Result for applying operator {a} and {b} is {operator(a, b)}
                </p>
            </Fragment>
        </main>
    );

}

export default Calculator;
