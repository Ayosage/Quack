import styled from "styled-components";

let white = "rgb(237, 233, 213)";
let peach = "rgb(231, 171, 154)";
let lightOrange="rgb(223, 120, 87)";
let green = "rgb(97, 113, 67)";
export const RegisterForm = styled.form`
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  
  h1{
    margin-bottom: 2rem;
    color: ${white};
  }
  *{
    margin-bottom: 10px;
  }
  
  input{
    padding: 15px;
    border-radius: 10px;
    border: none;
    width: 90%;
  }
  
  .input-container > input {
    width: auto;
    margin: 0 5px 0 5px;
  }
  
  
  
  .submit{
    width: 60%;
    margin-top: 1rem;
    background-color: ${white};
    transition: all .2s;
  }
  .submit:hover{
   
    background-color: ${green};
    color: ${white};
    
  }
`

