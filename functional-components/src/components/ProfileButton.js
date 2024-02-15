import { useContext } from "react";
import { NameContext } from "../contexts/NameContext";

function ProfileButton() {
    const name = useContext(NameContext);

    return (
        <a className="nav-link m-1">
            {name}
        </a>
    )
}

export default ProfileButton;
