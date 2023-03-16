import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
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
    button{
        cursor: pointer;
        font-family: "Lexend Deca", sans-serif;
        font-weight: 400;
        border-radius: 5px;
    }
`;
export default GlobalStyle;
