import styled from "styled-components";
import Topo from "../../components/Topo";

export default function Habitos() {
  return (
    <PageContainer>
      <Topo />
      <Style>
        <>
          <h2>Meus hábitos</h2>
          <div>+</div>
        </>
        <p>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </p>
      </Style>
    </PageContainer>
  );
}
const PageContainer = styled.div`
  width: 100vw;
  height: 79vh;
  margin-top: 70px;
  margin-bottom: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Lexend Deca", sans-serif;
  font-weight: 400;
  background-color: #E5E5E5;
  img {
    width: 180px;
    height: 178px;
  }
  a {
    color: #52b6ff;
    font-size: 14px;
    text-align: center;
  }
`;
const Style = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  height: 78vh;
`;