import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/logo.png";

export default function Cadastro() {
  return (
    <PageContainer>
      <Style>
        <img src={logo} />
        <FromContainer>
          <label htmlFor="email"/>
          <input id="email" type="email" placeholder="email" />
          <label htmlFor="password"/>
          <input id="password" type="password" placeholder="senha" />
          <label htmlFor="name"/>
          <input id="name" type="text" placeholder="nome" />
          <label htmlFor="foto"/>
          <input id="foto" type="url" placeholder="foto" />
          <button type="submid">Cadastrar</button>
        </FromContainer>
        <Link to="/">
          <p>Já tem uma conta? Faça login!</p>
        </Link>
      </Style>
    </PageContainer>
  );
}
const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Lexend Deca", sans-serif;
  font-weight: 400;
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
  justify-content: center;
  align-items: center;
  position: relative;
  width: 500px;
  height: 300px;
`;
const FromContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
  font-size: 18px;
  button {
    width: calc(100% - 40px);
    background: #52b6ff;
    border: 1px solid #d4d4d4;
    color: #ffffff;
    border-radius: 5px;
    height: 45px;
    font-size: 20px;
    cursor: pointer;
  }
  input {
    width: calc(100% - 60px);
    background: #ffffff;
    border: 1px solid #d4d4d4;
    border-radius: 5px;
    height: 45px;
    margin-bottom: 5px;
    padding: 0 10px;
    font-size: 18px;
    display: flex;
    align-items: center;
    &::placeholder {
      color: #dbdbdb;
      font-weight: 400;
    }
  }
`;
