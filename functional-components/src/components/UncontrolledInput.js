import { useState } from "react";

function NaturalSum(){
    const [sum, setSum] = useState(0);

    const onSubmit = (event) =>{
        event.preventDefault();
        const value = event.target.elements.operand.valueAsNumber;
        const naturalSum = (value * (value + 1)) / 2;
        setSum(naturalSum);
    }

    return (
        <form className="container m-auto d-flex flex-column p-2"
        onSubmit={onSubmit} style={{"width": "350px"}}>
            <label className="p-2 m">
                Number:
            </label>
            <input type="number" name="operand" min={"1"} defaultValue={"1"} className="p-1 m-2"/>
            <button className="btn btn-success">
                Submit
            </button>
            <div className="container text-center mt-3">
                Sum: <strong>{sum}</strong>
            </div>
        </form>
    )
};

export default NaturalSum;
