import styled from "styled-components";

let white = "rgb(237, 233, 213)";
let peach = "rgb(231, 171, 154)";
let lightOrange="rgb(223, 120, 87)";
let green = "rgb(97, 113, 67)";
export const Card = styled.div`
  background-color: ${green};
  
  color: ${white};
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-top: 10px;
`
export const UserContainer = styled.div`
  display: flex;
  align-items: end;
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
  margin: 5px 10px 5px 10px;
`
export const QuackContent = styled.h3`
  padding-left: 20px;
`
export const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`
