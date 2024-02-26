import { useReducer, useEffect } from "react";

const URL = "https://swapi.dev/api/people";

const INITIAL_STATE = {
    status: "INTIALIZE",
    result: null,
    error: null
};

function reducer(state, {type, payload}){
    switch(type){
        case "LOADING":
            return {...state, status: "LOADING"};
        case "FAILURE":
            return {...state, status: "FAILURE", error: payload};
        case "SUCCESS":
            return {...state, status: "SUCCESS", result: payload};
        default:
            return state;
    };
}

function DataLoader(){
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

    useEffect(
        () => {
            dispatch({type: "LOADING"});
            fetch(URL)
            .then(res => res.json())
            .then(({ results }) => dispatch({type: "SUCCESS", payload: results}))
            .catch(({ message }) => dispatch({type: "FAILURE", payload: message}))
        }, []
    );
    const {status, error, result} = state;

    if(status === "INTIALIZE") return <h1>Initializing</h1>
    if(status === "LOADING") return <div><div className="spinner-border" role="status"></div> <div>Loading</div></div>
    if(status === "FAILURE") return <h1>Error occured: {error}</h1>

    return (
        <>
            <h1>Results are in </h1>
            <ul>
                {
                    result.map(
                        ({ name }) => {
                            return <ul key={name}>{name}</ul>
                        }
                    )
                }
            </ul>
        </>
    );

}

export default DataLoader;
