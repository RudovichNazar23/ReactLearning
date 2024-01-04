import {useState, useEffect} from "react";

function ResizeWindow(){
    const [windowWidth, setWindwoWidth] = useState(window.innerWidth);

    const hadleResize = () => {
        setWindwoWidth(window.innerWidth);
    }

    useEffect(
        () => {
            window.addEventListener("resize", hadleResize);

            return () => window.removeEventListener("resize", hadleResize);
        }, [windowWidth]
    );

    return <div style={{"font-size": "24px"}} className="p-2 m-3">{windowWidth}</div>
}

export default ResizeWindow;