import styled from "styled-components";

let white = "rgb(237, 233, 213)";
let peach = "rgb(231, 171, 154)";
let lightOrange="rgb(223, 120, 87)";
let green = "rgb(97, 113, 67)";


export const FloatIcon = styled.button`
  margin: 20px;
  width: 60%;
  height: 3rem;
  background-color: ${lightOrange};
  box-shadow: 2px 2px black;
  color: ${white};
  font-size: 20px;
  border: none;
   border-radius: 50px;
  text-align: center;
 
  
  transition: .2s all;
  
  :active{
    box-shadow: .5px .5px black;
  }
`