import styled from "styled-components";
import Menu from "../../components/Menu";
import Topo from "../../components/Topo";

export default function Hoje(){
    return(
        <PageContainer>
            <Topo/>
            <Style>
                <Main>
                    <h2>Segunda, 17/05</h2>
                    <h3>Nenhum hábito concluído ainda</h3>
                    <div>
                        <h4></h4>
                        <p></p>
                        <p></p>
                    </div>
                </Main>
            </Style>
            <Menu/>
        </PageContainer>
    )
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
    color: #BABABA;
    font-size: 18px;
  }
`