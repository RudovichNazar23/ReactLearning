import MainGreet from "./MainGreet";
import NavBar from "./NavBar";

function DashBoard({ name, iconLink }){
    return (
        <>
            <NavBar name={name} />
            <MainGreet name={name} />
        </>
    )
};

export default DashBoard;
