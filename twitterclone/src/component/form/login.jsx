import React, {useState} from "react";
import {Form} from "./login.styles";

function Login() {
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');

    const handleClick=(e)=>{
        e.preventDefault()
        const user={username,password};
        console.log(user);
        {/* below is where you need to add the path for authentication /auth is api endpoint*/}
        fetch("http://localhost:8080/user/auth",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(user)
        }).then(() =>{
            console.log("New Student Added")
        })

    }
    return (

            <Form action={"x"}>
                <h1>Login</h1>
                <div>
                    <input type={"text"} name={"username"} value={username} onChange={(e)=>setUsername(e.target.value)}/>
                    <input type={"password"} name={"password"} value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </div>

                {/* change font size and  maybe font family*/}
                <input className="submit" type="submit" value="Login" onClick={handleClick}/>

                <a href="/register">Dont have an account? Sign Up!</a><br/>
            </Form>

    );
}

export default Login;