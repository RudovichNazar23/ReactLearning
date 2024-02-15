import { useContext } from "react";
import { NameContext } from "../contexts/NameContext";

function Welcome(){
    const name = useContext(NameContext);

    return (
        <section>
            <h3>Welcome, {name}!</h3>
        </section>
    )
}


function MainGreet(){
    return ( 
        <main className="m-3 p-2">
            <Welcome />
        </main>
    );
}

export default MainGreet;
