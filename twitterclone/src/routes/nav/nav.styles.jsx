import styled from "styled-components"
import {Link} from "react-router-dom";

export const MainNav = styled.nav`
 
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: darkgreen;
  color: antiquewhite;
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
  color: antiquewhite;
  text-decoration: none;
  margin: 10px;
    `

export const H1 = styled.h1`
  color: white;
  margin-left: 20px;
`