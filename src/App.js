import { Route, BrowserRouter , Routes } from "react-router-dom";
import Cadastro from "./pages/CadastroPage/Cadastro";
import Habitos from "./pages/HabitosPage/Habitos";
import Historico from "./pages/HistoricoPage/Historico";
import Hoje from "./pages/HojePage/Hoje";
import Login from "./pages/LoginPage/Login";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Login/>}/> */}
        {/* <Route path="/cadastro" element={<Cadastro/>}/> */}
        {/* <Route path="/" element={<Habitos/>}/> */}
        <Route path="/" element={<Hoje/>}/>
        {/* <Route path="/historico" element={<Historico/>}/> */}
      </Routes>
    </BrowserRouter>
  );
}
