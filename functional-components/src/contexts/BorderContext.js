import { createContext, useContext } from "react";


const BorderContext = createContext(1);

function Button({ children }){
    const borderWidth = useContext(BorderContext);
    const style = {
        border: `${borderWidth}px solid black`,
        background: "transparent"
    };

    return <button style={style}>{children}</button>
}

export default Button;
