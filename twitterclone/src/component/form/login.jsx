import React, {useContext, useState} from "react";
import {Form} from "./login.styles";
import {UserContext} from "../../App";
import {useNavigate} from "react-router-dom";


function Login() {
    const [user, setUser] = useContext(UserContext);
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleClick=(e)=>{
        e.preventDefault()
        const authUser={username,password};


        fetch("http://localhost:8080/user/auth", {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(authUser)
        }).then((response) =>{

            return response.json()
        }).then(data => {
            console.log(data)
            if(username.toLowerCase() === data.username.toLowerCase() && password === data.password){
                setUser(data)
                navigate("/dashboard")
            }
            else{
                console.log("credentials dont match")
            }
        })

    }
    return (

            <Form action={"x"}>
                <h1>Login</h1>
                <div>
                    <input type={"text"} name={"username"} placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                    <input type={"password"} name={"password"} placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </div>

                {/* change font size and  maybe font family*/}
                <input className="submit" type="submit" value="Login" onClick={handleClick}/>

                <a href="/register">Dont have an account? Sign Up!</a><br/>
            </Form>

    );
}

export default Login;