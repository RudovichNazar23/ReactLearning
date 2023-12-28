import { useState } from "react";

function Accrodion(){
    const [isExpanded, setExpanded] = useState(false);

    return (
        <main>
            <h2 style={{"padding": "5px", "margin": "5px;"}}>Secret password</h2>
            <button onClick={() => setExpanded(() => false )}>
                -
            </button>
            <button onClick={() => setExpanded(() => true )}>
                +
            </button>
            {
                isExpanded && (
                    <p>
                        Password: <code>user228</code>
                    </p>
                )                
            };
        </main>
    )
}

export default Accrodion;
