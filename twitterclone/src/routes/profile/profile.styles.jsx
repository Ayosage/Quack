import styled from "styled-components";


let white = "rgb(237, 233, 213)";
let peach = "rgb(231, 171, 154)";
let lightOrange="rgb(223, 120, 87)";
let green = "rgb(97, 113, 67)";
export const FlexContainer = styled.div`
    
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 1rem;
  color: ${white};
  
  .flex-container-nested{
    display: flex;
    width: 100%;
    align-items: flex-end;
    margin-bottom: 20px;
    
    .container{
      margin-left: 20px;
    }
    
    
  }

  .info-container{
    width: 100%;
    display: flex;
    flex-direction: column;
   
  }
  
  
  
    .circle{
      height: 5rem;
      width: 5rem;
      border-radius: 50%;
      background-color: black;
      margin-left: 20px;
    }
  
  .name{
    font-size: 2.5rem;
    
  }
  
  .handle{
    font-size: 20px;
    align-self: start;
    margin-left: 20px;
  }
  
  .bio{
    font-size: 20px;
    padding: 10px 0 10px 20px;
    text-align: start;
  }
  
  .date{
    font-size: 12px;
    align-self: start;
    margin-left: 20px;
  }
`
export const HR = styled.hr`
  border: 2px solid ${white};
  width: 80%;
`