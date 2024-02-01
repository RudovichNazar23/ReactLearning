import { useState, useEffect, useRef } from "react";

function ShowMenu(){
    const [isExpanded, setExpanded] = useState(false);
    let menuRef = useRef();

    useEffect(
        () => {
            if(!isExpanded){ return; }

            const onWindowClick = () => setExpanded(false);
            const onMenuClick = (event) => event.stopPropagation();
            const menu = menuRef.current;

            window.addEventListener("pointerdown", onWindowClick);
            menu.addEventListener("pointerdown", onMenuClick);

            return () => window.removeEventListener("pointerdown", onWindowClick);
        },
        [isExpanded]
    );

    return (
        <main>
            <button onClick={() => setExpanded(true)} className="btn btn-light">Show menu</button>
            {
                isExpanded && (
                    <div style={{border: "1px solid black", padding: "1em"}} ref={menuRef}>
                        This is the menu
                    </div>
                )
            }
        </main>
    )
}


export default ShowMenu;
