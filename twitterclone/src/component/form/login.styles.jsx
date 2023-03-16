import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30rem;
  height: 10rem;
  
    h1{
      color: antiquewhite;
    }
  
    input{
      margin: 10px;
      padding: 10px;
      border: none;
      border-radius: 10px;
    }
  
    button{
      width: 50%;
    }
  
  a{
    margin: 30px 0 0 0 ;
    text-decoration: none;
    color: antiquewhite;
  }
  a:hover{
    color: blue;
    text-decoration: underline;
  }
`

export const Button = styled.button`
  
`