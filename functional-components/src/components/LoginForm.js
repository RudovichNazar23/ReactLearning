import { useState } from "react";

function LoginForm(){
    const [password, setPassword] = useState("");
    const [isAdmin, setIsAdmin] = useState(false);
    const [message, setMessage] = useState(null);

    const onSubmit = (event) => {
        event.preventDefault();
        if (password === "super_admin"){
            setIsAdmin(() => true);
        }
        else{
            setMessage(() => "Password is incorrect");
        }
    }

    return isAdmin ? (
        <h1>Welcome Back !!!</h1>
    )
    : (
        <form onSubmit={onSubmit} className="p-2 m-2">
            <input type="password" onChange={(event) => setPassword(event.target.value)}/>
            <div className="text-danger">{message && (message)}</div>
            <button className="btn btn-primary">Login</button>
        </form>
    )
}

export default LoginForm;
