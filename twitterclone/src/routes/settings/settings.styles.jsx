import styled from "styled-components";

let white = "rgb(237, 233, 213)";
let peach = "rgb(231, 171, 154)";
let lightOrange="rgb(223, 120, 87)";
let green = "rgb(97, 113, 67)";
export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  color: ${white};
  background-image: linear-gradient(to bottom right, rgba(231, 171, 154, 1), rgba(223, 120, 87,1));
  padding-top: 10rem;
  
  h2{
   
  }
  
  a{
    border-radius: 50px;
    color: ${white};
    text-decoration: none;
    padding: .75rem;
    transition: .3s all;
  }
  a:hover{
    background-color: ${peach};
    font-size: 25px;
  }
  
  hr{
    border: 2px solid rgba(97, 113, 67, 0.8);
    width: 60%;
  }
`