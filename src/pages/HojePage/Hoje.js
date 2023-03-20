import axios from "axios";
import dayjs from "dayjs";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Menu from "../../components/Menu";
import Topo from "../../components/Topo";
import { BASE_URL } from "../../constants/urls";
import { ConstantContext } from "../../context/ConstantContext";
import Tarefas from "./Tarefas";

export default function Hoje() {
  const { token, completHabit, setCompletHabit } = useContext(ConstantContext);
  const [habitToday, setHabitToday] = useState();

  function listHabit() {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .get(`${BASE_URL}habits/today`, config)
      .then((res) => {
        setHabitToday(res.data);
        setCompletHabit(
          (res.data.filter((habit) => habit.done).length / res.data.length) *
            100
        );
      })
      .catch((err) => console.log(err.response.data.message));
  }
  function checkHabit(id) {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .post(`${BASE_URL}habits/${id}/check`, config)
      .then(listHabit)
      .catch((err) => console.log(err.response));
  }

  function noCheckHabit(id) {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .post(`${BASE_URL}habits/${id}/uncheck`, config)
      .then(listHabit)
      .catch((err) => console.log(err.response));
  }

  function toChange(id) {
    habitToday.find((habit) => habit.id === id).done
      ? noCheckHabit(id)
      : checkHabit(id);
  }

  useEffect(() => {
    if (localStorage.getItem("tokenLocal")) {
      listHabit();
    }
  }, []);

  return (
    <PageContainer>
      <Topo />
      <Style>
        <Main>
          <h2 data-test="today">{dayjs().locale('pt-br').format('dddd, DD/MM')}</h2>
          {habitToday ? (
            completHabit > 0 ? (
              <h3 id="counter" data-test="today-counter">{completHabit.toFixed()}% dos hábitos concluídos</h3>
            ) : (
              <h3 data-test="today-counter">Nenhum hábito concluído ainda</h3>
            )
          ) : (
            <></>
          )}
          <>
              {habitToday ? habitToday.map((h) =>
                 <Tarefas key={h.id} habit={h} clickHabit={() => toChange(h.id)}/>
              ) : 
              <h3>Nenhum habitos para hoje</h3>
              }
          </>
          
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
  #counter{
    color: #8FC549;
  }
`;
