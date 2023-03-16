import React, {useState} from "react";
import {Form} from "./login.styles";

function Login() {
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');

    const handleClick=(e)=>{
        e.preventDefault()
        const user={username,password};
        console.log(user);
        fetch("http://localhost:8080/user/add",{
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
                <button type={"submit"} onClick={handleClick}>Login</button>

                <a href="/register">Dont have an account? Sign Up!</a><br/>
            </Form>

    );
}

export default Login;