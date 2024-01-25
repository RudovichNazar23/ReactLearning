import { useState } from "react";

function DropDownCounter(){
    const [count, setCount] = useState(0);
    
    const onChange = (event) => setCount((value) => value + parseInt(event.target.value));

    const values = [1, 2, 3, 4, 5]

    return (
        <div>
            <section onChange={onChange}>
                <h2>{count}</h2>
                <select>
                    {
                        values.map((value) => <option key={value} value={value}>{value}</option>)
                    }
                </select>
            </section>
        </div>
    )
}

export default DropDownCounter;
