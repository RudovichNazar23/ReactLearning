import NavBarLink from "./NavBarLink";
import ProfileButton from "./ProfileButton";

function NavBar() {
    return (
    <nav className="navbar navbar-light bg-light border-bottom border-dark">
        <ul className="navbar-nav d-flex flex-row">
            <NavBarLink>Home</NavBarLink>
            <NavBarLink>Groups</NavBarLink>
            <NavBarLink>Profile</NavBarLink>
            <ProfileButton />
        </ul>
    </nav>
    );
}

export default NavBar;
