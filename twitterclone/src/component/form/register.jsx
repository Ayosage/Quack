import {useState} from "react";
import {RegisterForm} from "./register.styles";
import {RegContainer} from "../../routes/register/register.styles";
import {useNavigate} from "react-router-dom";


export default function Register(){

    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');
    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[email, setEmail] = useState('');
    const navigate = useNavigate();


    const handleClick=(e)=>{
        e.preventDefault()
        const user={username,password, email, firstName, lastName};
        console.log(user);
        fetch("http://localhost:8080/user/add",{
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify(user),
        }).then(() =>{
            navigate("/")
        })

    }

    return(
        <RegContainer>
        <RegisterForm action={"x"}>

            <h1>Registration</h1>
            <div className="input-container">
                <input type="text" name="fName" placeholder="First Name" value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
                <input type="text" name="lName" placeholder="Last Name" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
            </div>
                <input type="text" name="username" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                <input type="text" name="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input type="password" name="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>




            <input className="submit" type="submit" value="Create Account" onClick={handleClick}/>

        </RegisterForm>
        </RegContainer>
    )
}
