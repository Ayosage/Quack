import styled from "styled-components"
import {Link} from "react-router-dom";

let white = "rgb(237, 233, 213)";
let peach = "rgb(231, 171, 154)";
let lightOrange="rgb(223, 120, 87)";
let green = "rgb(97, 113, 67)";
export const MainNav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
 
  color: ${white};
  border-radius: 10px;
  margin: 10px;
`
export const NavList = styled.ul`
  list-style: none;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  align-items: center;
    `
export const NavLink = styled(Link)`
  color: ${white};
  text-decoration: none;
  margin: 10px;
  font-size: 20px;
  font-weight: 500;
  position: relative;

  :after{
    position: absolute;
    content: "";
    width: 0;
    height: 0;
    background-color: ${white};
    left: 50%;
    transform: translate(-50%, -50%);
    bottom: -1.5rem;
    border-radius: 50%;

    transition: all 0.2s ease-in-out;
  }

  :hover:after{
    height: 0.5rem;
    width: 0.5rem;
  }
  
    `

export const H1 = styled.h1`
  color: ${white};
  margin-left: 20px;
`