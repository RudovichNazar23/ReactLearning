import React from "react";
import {useReducer} from "react";

interface State {
    count: number;
    error: string | null;
}

interface Action {
    type: "increment" | "dicrement";
}

function reducer(state: State, action: Action){
    const { type } = action;

    switch(type){
        case "increment": {
            return {...state, count: state.count + 1};
        }
        case "dicrement": {
            return {...state, count: state.count - 1};
        }
    }
}

function Example(){
    const [state, dispatch] = useReducer(reducer, {count: 0, error: null})

    return (
        <div>
            <div>
                Counter: {state.count}
            </div>
            {state.error && <div className="text-danger">{state.error}</div>}
            <div className="container d-flex flex-column">
                <button className="btn btn-primary">
                    Increment
                </button>
                <button className="btn btn-danger">
                    Dicrement
                </button>
            </div>
        </div>
    )
}

export default Example;