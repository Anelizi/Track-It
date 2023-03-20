import styled from "styled-components";
import Topo from "../../components/Topo";
import Menu from "../../components/Menu";
import { BsPlusSquareFill } from "react-icons/bs";
import { useContext, useEffect, useState } from "react";
import { ConstantContext } from "../../context/ConstantContext";
import { BASE_URL } from "../../constants/urls";
import axios from "axios";
import CriarHabitos from "./CriarHabitos";
import NovosHabitos from "./NovosHabitos";

export default function Habitos() {
  const [createHabit, setCreateHabit] = useState(false);
  const { token } = useContext(ConstantContext);
  const [habitList, setHabitList] = useState([]);
  const [habits, setHabits] = useState(false);
  const daysWeek = [
    { day: "D", id: 0 },
    { day: "S", id: 1 },
    { day: "T", id: 2 },
    { day: "Q", id: 3 },
    { day: "Q", id: 4 },
    { day: "S", id: 5 },
    { day: "S", id: 6 },
  ];

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .get(`${BASE_URL}habits`, config)
      .then((res) => {
        setHabitList(res.data.reverse());
      })
      .catch((err) => console.log(err.response.data.message));
  }, []);

  return (
    <PageContainer>
      <Topo />
      <Style>
        <Main>
          <HabitoContainer>
            <h2>Meus hábitos</h2>
            <Icon
              onClick={() => setCreateHabit(!createHabit)}
              data-test="habit-create-btn"
            />
          </HabitoContainer>
          <CriarHabitos
            createHabit={createHabit}
            setCreateHabit={setCreateHabit}
            habitList={habitList}
            setHabitList={setHabitList}
            daysWeek={daysWeek}
            setHabits={setHabits}
          />
          {habits ? (
            <NovosHabitos
              habitList={habitList}
              setHabitList={setHabitList}
              daysWeek={daysWeek}
              habits={habits}
            />
          ) : (
            <p>
              Você não tem nenhum hábito cadastrado ainda. Adicione um hábito
              para começar a trackear!
            </p>
          )}
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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
  p {
    width: calc(100% - 40px);
    color: #666666;
    font-size: 18px;
  }
`;
const HabitoContainer = styled.div`
  width: calc(100% - 40px);
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  h2 {
    color: #126ba5;
    font-size: 23px;
  }
`;
const Icon = styled(BsPlusSquareFill)`
  color: #52b6ff;
  font-size: 30px;
  cursor: pointer;
`;
