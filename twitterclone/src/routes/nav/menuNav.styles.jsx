import styled from "styled-components";
import {Link} from "react-router-dom";
let white = "rgb(237, 233, 213)";
let peach = "rgb(231, 171, 154)";
let lightOrange="rgb(223, 120, 87)";
let green = "rgb(97, 113, 67)";
export const Menu = styled.ul`
  list-style: none;
 padding: 0;
  
  .item-container{
    display: flex;
    justify-content: center;
    width: 100%;
  }
`

export const MenuItem = styled(Link)`
  width: 50%;
  
  padding: 1rem 0 1rem 0;
  position: relative;
  font-weight: bold;
  transition: all .2s;
  border-radius: 50px;

  color: ${white};
  text-decoration: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  
  > * {
    margin-left: 10px;
    font-size: 20px;
  }
  
  :hover{
    background-color:rgba(100, 125, 80, 0.9);
  }
  
  }
  
`