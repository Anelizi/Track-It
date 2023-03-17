import { useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Cadastro from "./pages/CadastroPage/Cadastro";
import Habitos from "./pages/HabitosPage/Habitos";
import Historico from "./pages/HistoricoPage/Historico";
import Hoje from "./pages/HojePage/Hoje";
import Login from "./pages/LoginPage/Login";
import { ImageContext } from "./context/ImageContext";

export default function App() {
  const [image, setImage] = useState(localStorage.getItem("image"));
  const [token, setToken] = useState(localStorage.getItem("token"));

  return (
    <BrowserRouter>
      <ImageContext.Provider value={{image, setImage, token, setToken}}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/habitos" element={<Habitos />} />
          <Route path="/hoje" element={<Hoje />} />
          <Route path="/historico" element={<Historico />} />
        </Routes>
      </ImageContext.Provider>
    </BrowserRouter>
  );
}
