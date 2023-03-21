import styled from "styled-components";

let white = "rgb(237, 233, 213)";
let peach = "rgb(231, 171, 154)";
let lightOrange="rgb(223, 120, 87)";
let green = "rgb(97, 113, 67)";
export const GridContainer = styled.div`
    background-image: linear-gradient(270deg, ${lightOrange}, ${green} 30% );
    height: 100%;
    display: grid;
    grid-auto-flow: row;
    grid-template-columns: 1fr 2fr 1fr;
  
  
`

export const Menu = styled.ul`
  list-style: none;
 padding: 0;
  
`

export const MenuItem = styled.li`
  width: 90%;
  margin-left: -20px;
  padding: 1rem 0 1rem 0;
  position: relative;
  font-weight: bold;
  transition: all .2s;
  border-right: 0 solid ${green};
  
  &:after{
    position: absolute;
    content: "";
    width: 0;
    height: 0;
    background-color: #252525;
    right: 30%;
    top: 50%;
    transform: translate(-100%, -50%);
    border-radius: 50%;

    transition: all 0.2s ease-in-out;
  }
  &:hover:after{
    font-size: 20px;
    height: 0.5rem;
    width: 0.5rem;

  }
  
  
  
  a {
    color: ${white};
    text-decoration: none;
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
