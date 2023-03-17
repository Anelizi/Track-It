import styled from "styled-components";
import Menu from "../../components/Menu";
import Topo from "../../components/Topo";
import { BsCheckSquareFill } from "react-icons/bs";

export default function Hoje() {
  return (
    <PageContainer>
      <Topo />
      <Style>
        <Main>
          <h2 data-test="today">Segunda, 17/05</h2>
          <h3 data-test="today-counter">Nenhum hábito concluído ainda</h3>

          <Tarefas data-test="today-habit-container">
            <div>
              <h4 data-test="today-habit-name">Ler 1 capítulo de livro</h4>
              <p data-test="today-habit-sequence">Sequência atual: 3 dias </p>
              <p data-test="today-habit-record">Seu recorde: 5 dias</p>
            </div>
            <Icon data-test="today-habit-check-btn"/>
          </Tarefas>
        </Main>
      </Style>
      <Menu />
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
  width: calc(100% - 40px);
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  h2 {
    color: #126ba5;
    font-size: 23px;
  }
  h3 {
    color: #bababa;
    font-size: 18px;
    margin-top: 10px;
  }
`;
const Tarefas = styled.div`
  width: 100% ;
  height: 94px;
  background-color: #ffffff;
  border-radius: 5px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    width: 100% ;
    margin-left: 10px;
    color: #666666;
    h4 {
      font-size: 20px;
      margin-bottom: 10px;
    }
    p {
      font-size: 13px;
    }
  }
`;
const Icon = styled(BsCheckSquareFill)`
  font-size: 80px;
  margin-right: 10px;
  color: #ebebeb;
  cursor: pointer;
`;
