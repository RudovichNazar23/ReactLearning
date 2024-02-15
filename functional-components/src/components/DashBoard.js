import MainGreet from "./MainGreet";
import NavBar from "./NavBar";
import { NameContext } from "../contexts/NameContext";

function DashBoard({ name }){
    return (
        <NameContext.Provider value={name}>
            <NavBar/>
            <MainGreet/>
        </NameContext.Provider>
    )
};

export default DashBoard;
