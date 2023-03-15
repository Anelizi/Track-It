import styled from "styled-components";

export default function Topo() {
  return (
    <TopoContainer>
      <h1>TrackIt</h1>
      <Img src=""/>
    </TopoContainer>
  );
}
const TopoContainer = styled.div`
  position: fixed;
  width: 97vw;
  height: 70px;
  background-color: #126ba5;
  left: 0;
  top: 0;
  padding: 0px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  z-index: 1;
  h1 {
    font-size: 39px;
    font-family: "Playball", sans-serif;
    font-weight: 400;
    color: #ffffff;
  }
`;
const Img = styled.img`
    width: 51px;
    height: 51px;
    border-radius: 50%;
    display: block;
`
