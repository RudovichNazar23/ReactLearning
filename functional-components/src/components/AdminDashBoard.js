import { useState } from "react";
import DashBoard from "./DashBoard";

function AdminDashBoard(){
    const [user, setUser] = useState("Nazar");

    return (
        <>
            <select onChange={(event) => setUser(event.target.value)}>
                <option>Nazar</option>
                <option>Steve</option>
                <option>Bill</option>
            </select>
            <DashBoard name={user} />
        </>
    )

}   

export default AdminDashBoard;
