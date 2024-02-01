import {useState} from "react";

function SummationForm(){
    const [first, setFirst] = useState(0);
    const [second, setSecond] = useState(0);

    const onChangeFirst = (event) => setFirst(event.target.value);
    const onChangeSecond = (event) => setSecond(event.target.value);

    return (
        <div className="d-flex flex-column align-items-center justify-content-center p-2">
            <div className="p-2">
                <label>A:</label>
                <input type="text" onChange={onChangeFirst}/>
            </div>
            <div className="p-2">
                <label>B:</label>
                <input type="text" onChange={onChangeSecond}/>
            </div>
            <div>
                    A+B: <strong>{Number(first) + Number(second)}</strong>
            </div>
        </div>
    )
}


export default SummationForm;