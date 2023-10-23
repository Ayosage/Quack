import styled from "styled-components";

let white = "rgb(237, 233, 213)";
let peach = "rgb(231, 171, 154)";
let lightOrange="rgb(223, 120, 87)";
let green = "rgb(97, 113, 67)";
export const Card = styled.div`
  background-color: ${green};
  
  color: ${white};
  width:40%;
  height: auto;
  border-radius: 10px;
  margin-top: 10px;
  margin-left: 10px;
  box-shadow: 0px 1px 2px black;
  border: 2px solid ${green};
  
  
`
export const UserContainer = styled.div`
  display: flex;
  align-items: end;
  
  .handle{
    margin-bottom: 5px;
    font-weight: 500;
  }
`


export const ProfilePicture = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: ${white};
  margin: 10px 5px 0 10px;
`

export const ContentContainer = styled.div`
  width: 100%;

  
`
export const QuackContent = styled.h3`
  text-align: left;
  
 padding: 10px 5px 10px 5px;
  margin: 1rem 50px 1rem 50px ;
  font-weight: 300;
`
export const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding-bottom: 10px;
 
`
