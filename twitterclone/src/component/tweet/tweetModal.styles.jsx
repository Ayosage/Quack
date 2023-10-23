import styled from "styled-components";

let white = "rgb(237, 233, 213)";
let peach = "rgb(231, 171, 154)";
let lightOrange="rgb(223, 120, 87)";
let green = "rgb(97, 113, 67)";

export const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60vw;
  height: auto;
  padding-bottom: 20px;
  border-radius: 20px;
  
  background-color: ${peach};
  
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 5px black;
  
  .flex-container{
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    padding: 20px;
  }
  
  
  textarea{
    background-color: rgba(0, 0, 0, 0);
    border: 2px inset ${lightOrange};
    resize: none;
    margin: 20px;
    font-size: 20px;
  }
  
  .exit, .exit:hover{


    cursor: pointer;
   
  }
  

`

export const SendButton = styled.button`
    background-color: ${green};
  color: ${white};
    width: 40%;
    height: 3rem;
    border: none;
  border-radius: 25px;
    
`