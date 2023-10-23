import styled from "styled-components";
import {Link} from "react-router-dom";

let white = "rgb(237, 233, 213)";
let peach = "rgb(231, 171, 154)";
let lightOrange="rgb(223, 120, 87)";
let green = "rgb(97, 113, 67)";
export const GridContainer = styled.div`
    background-image: linear-gradient(270deg, ${lightOrange}, ${green} 30% );
    height: 100%;
    min-height: 100vh;
    display: grid;
    grid-auto-flow: row;
    grid-template-columns: 1fr 2fr 1fr;
  color: ${white};
    
    .profile-container-small{
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      .circle{
        height: 5rem;
        width: 5rem;
        border-radius: 50%;
        background-color: #282c34;
      }
      
      .handle{
        margin-top: 10px;
        font-size: 20px;
      }
    }
  
  
  
`


export const SearchBar = styled.div`
  background-image: linear-gradient(270deg, ${lightOrange}, ${green} 30% );
  padding: 1rem;
  
  input, input:focus{
    padding: 1rem;
    border-radius: 50px;
    border: none;
  }
`
