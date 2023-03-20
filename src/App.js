import { useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Cadastro from "./pages/CadastroPage/Cadastro";
import Habitos from "./pages/HabitosPage/Habitos";
import Historico from "./pages/HistoricoPage/Historico";
import Hoje from "./pages/HojePage/Hoje";
import Login from "./pages/LoginPage/Login";
import { ConstantContext } from "./context/ConstantContext";

export default function App() {
  const [image, setImage] = useState(localStorage.getItem("image"));
  const [token, setToken] = useState(localStorage.getItem("tokenLocal"));
  const [completHabit, setCompletHabit] = useState(0);

  return (
    <BrowserRouter>
      <ConstantContext.Provider value={{image, setImage, token, setToken, completHabit, setCompletHabit}}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/habitos" element={<Habitos />} />
          <Route path="/hoje" element={<Hoje />} />
          <Route path="/historico" element={<Historico />} />
        </Routes>
      </ConstantContext.Provider>
    </BrowserRouter>
  );
}
