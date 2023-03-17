import axios from "axios";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/logo.png";
import { BASE_URL } from "../../constants/urls";

export default function Cadastro() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState({
    loading: false,
    classNameLoading: "",
  });
  const navigate = useNavigate();

  function cadastrar(e) {
    e.preventDefault();

    setLoading({ ...loading, loading: true, classNameLoading: "disabledInpu" });

    const body = { email, password, name, image };

    axios
      .post(`${BASE_URL}auth/sign-up`, body)
      .then((res) => navigate("/"))
      .catch((err) => {
        alert(err.response.data.message);
        setLoading({ ...loading, loading: false, classNameLoading: "" });
      });
  }

  return (
    <PageContainer>
      <Style>
        <img src={logo} />
        <FromContainer onSubmit={cadastrar}>
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={loading.classNameLoading}
            disabled={loading.loading}
            required
            data-test="email-input"
          />
          <input
            type="password"
            placeholder="senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={loading.classNameLoading}
            disabled={loading.loading}
            required
            data-test="password-input"
          />
          <input
            type="text"
            placeholder="nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={loading.classNameLoading}
            disabled={loading.loading}
            required
            data-test="user-name-input"
          />
          <input
            type="url"
            placeholder="foto"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className={loading.classNameLoading}
            disabled={loading.loading}
            required
            data-test="user-image-input"
          />
          <button type="submid" data-test="signup-btn">
            {loading.loading ? (
              <ThreeDots
                color="rgba(255, 255, 255, 1)"
                text-align="center"
                height={13}
                width={51}
              />
            ) : (
              "Cadastrar"
            )}
          </button>
        </FromContainer>
        <Link to="/" data-test="login-link">
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
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .disabledInpu {
    background-color: #f2f2f2;
  }
`;