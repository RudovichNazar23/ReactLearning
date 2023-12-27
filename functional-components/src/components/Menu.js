

function Menu(props){
    return (
        <nav className="navbar navbar-expand-sm bg-light p-2">
            <div className="container-fluid">
                <h1>Navigation</h1>
                <ul className="navbar-nav p-2">
                    {props.children.map((item) => item )}
                </ul>
            </div>
        </nav>
    )
}

export default Menu;
