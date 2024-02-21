import { useReducer } from "react";

const buttonWidth = {
    width: "150px",
};

function reducer(state, { type }){
    switch(type){
        case "increment": {
            const newCount = state.counter + 1;
            const hasError = newCount > 5;
            return {
                ...state, 
                counter: hasError ? state.counter : newCount,
                errorMessage: hasError ? "Reached maximum" : null
            };
        };
        case "decrement":{
            const newCount = state.counter - 1;
            const hasError = newCount < 0;

            return {
                ...state,
                counter: hasError ? state.counter : newCount,
                errorMessage: hasError ? "Reached minimum" : null
            };
        };
        default:
            return state;
    };
};

function UseReducerClicker(){
    const [state, dispatch] = useReducer(reducer, {
        counter: 0,
        errorMessage: null,
    });

    return (
        <section className="container m-3 p-2">
            <h1>Counter: {state.counter}</h1>
            <h3 className="text-center text-danger">{state.errorMessage && (state.errorMessage)}</h3>
            <div className="container d-flex flex-column p-2">
                <button className="btn btn-success p-2 m-2" 
                onClick={() => dispatch({ type: "increment" })}
                style={buttonWidth}>
                    Increment
                </button>
                <button className="btn btn-danger p-2 m-2" 
                onClick={() => dispatch({ type: "decrement" })}
                style={buttonWidth}>
                    Decrement
                </button>
            </div>
        </section>
    );
};

export default UseReducerClicker;
