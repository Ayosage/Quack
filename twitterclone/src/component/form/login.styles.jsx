import styled from "styled-components";

let white = "rgb(237, 233, 213)";
let peach = "rgb(231, 171, 154)";
let lightOrange="rgb(223, 120, 87)";
let green = "rgb(97, 113, 67)";
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30rem;
  height: 10rem;
  
    h1{
      margin-bottom: 2rem;
      color: ${white};
    }
  
    input{
      padding: 15px;
      border-radius: 10px;
      border: none;
      width: 90%;
      margin-bottom: 1rem;
    }

  .submit{
    width: 60%;
    margin-top: .5rem;
    background-color: ${white};
    transition: all .2s;
  }
  .submit:hover{

    background-color: ${green};
    color: ${white};

  }
  
  a{
    margin: 30px 0 0 0 ;
    text-decoration: none;
    color: ${white};
  }
  a:hover{
    color: ${lightOrange};
    text-decoration: underline;
  }
`

export const Button = styled.button`
  
`