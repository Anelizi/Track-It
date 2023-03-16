import styled from "styled-components";
import Topo from "../../components/Topo";
import { BsPlusSquareFill } from "react-icons/bs";
import Menu from "../../components/Menu";
import AddHabitos from "./AddHabitos";


export default function Habitos() {
  return (
    <PageContainer>
      <Topo />
      <Style>
        <Main>
          <HabitoContainer>
            <h2>Meus hábitos</h2>
            <Icon />
          </HabitoContainer>

          <AddHabitos/>

          <p>
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
            começar a trackear!
          </p>
        </Main>
      </Style>
      <Menu/>
    </PageContainer>
  );
}
const PageContainer = styled.div`
  width: 100vw;
  height: 79.5vh;
  margin-top: 70px;
  margin-bottom: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Lexend Deca", sans-serif;
  font-weight: 400;
  background-color: #e5e5e5;
`;
const Style = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  height: 78vh;
`;
const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
  p {
    width: calc(100% - 40px);
    color: #666666;
    font-size: 18px;
  }
`;
const HabitoContainer = styled.div`
  width: calc(100% - 40px);
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  h2 {
    color: #126ba5;
    font-size: 23px;
  }
`;
const Icon = styled(BsPlusSquareFill)`
  color: #52b6ff;
  font-size: 30px;
  cursor: pointer;
`;
