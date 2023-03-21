import styled from "styled-components";

export const Video = styled.video`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -2;
  object-fit: cover;
`

export const Overlay = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  background-color: rgba(0, 0, 0, 0.6);
`
