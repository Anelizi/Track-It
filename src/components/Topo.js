import { useContext } from "react";
import styled from "styled-components";
import { ConstantContext} from "../context/ConstantContext";

export default function Topo() {
  const {image} = useContext(ConstantContext);
  return (
    <TopoContainer data-test="header">
      <h1>TrackIt</h1>
      <img src={image}/>
    </TopoContainer>
  );
}
const TopoContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 70px;
  background-color: #126ba5;
  left: 0;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  z-index: 1;
  img{
    width: 51px;
    height: 51px;
    border-radius: 50%;
    margin-right: 20px;
  }
  h1 {
    font-size: 39px;
    font-family: "Playball", sans-serif;
    font-weight: 400;
    color: #ffffff;
    margin-left: 20px;
  }
`;
