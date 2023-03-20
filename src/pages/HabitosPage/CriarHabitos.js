import axios from "axios";
import { useContext, useState } from "react";
import styled from "styled-components";
import { BASE_URL } from "../../constants/urls";
import { ConstantContext } from "../../context/ConstantContext";

export default function CriarHabitos({
  createHabit,
  setCreateHabit,
  habitList,
  setHabitList,
  daysWeek,
  setHabits,
}) {
  const { token } = useContext(ConstantContext);
  const [daysHabit, setDaysHabit] = useState([]);
  const [nameHabit, setNameHabit] = useState("");

  function select(d) {
    if (daysHabit.includes(d)) {
      const newDay = daysHabit.filter((h) => h !== d);
      setDaysHabit(newDay);
    } else {
      const newDay = [...daysHabit, d];
      setDaysHabit(newDay);
    }
  }

  function create(e) {
    e.preventDefault();
    const habit = {
      name: nameHabit,
      days: daysHabit,
    };

    if (habit.days.length > 0) {
      <p>load</p>;
    } else {
      return alert("Selecione pela menos um dia");
    }

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .post(`${BASE_URL}habits`, habit, config)
      .then((res) => {
        setCreateHabit(false);
        const newList = [res.data, ...habitList];
        setHabitList(newList);
        setNameHabit("");
        setDaysHabit([]);
        
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
    setHabits(true)
  }
  

  return createHabit === true ? (
    <ContainerHabito onSubmit={create} data-test="habit-create-container">
      <input
        type="text"
        placeholder="nome do hábito"
        value={nameHabit}
        onChange={(e) => setNameHabit(e.target.value)}
        data-test="habit-name-input"
      />
      <Week>
        {daysWeek.map((d) => (
          <button
            key={d.id}
            disabled={daysHabit.includes(d.id) ? true : false}
            onClick={() => select(d.id)}
            data-test="habt-day"
          >
            {d.day}
          </button>
        ))}
      </Week>
      <ButtonContainer>
        <button
          onClick={() => setCreateHabit(false)}
          data-test="habit-create-cancel-btn"
        >
          Cancelar
        </button>
        <button type="submit" data-test="habit-create-save-btn">
          Salvar
        </button>
      </ButtonContainer>
    </ContainerHabito>
  ) : (
    <></>
  );
}
const ContainerHabito = styled.form`
  width: calc(100% - 40px);
  height: 180px;
  border-radius: 5px;
  background-color: #ffffff;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  input {
    margin-top: 20px;
  }
`;

const Week = styled.div`
  width: calc(100% - 40px);
  display: flex;
  button {
    width: 30px;
    height: 30px;
    background-color: #ffffff;
    border: 1px solid #d4d4d4;
    border-radius: 5px;
    color: #dbdbdb;
    margin-right: 5px;
    font-size: 20px;
    text-decoration: uppercase;
    &:disabled {
      background-color: #cfcfcf;
      color: #ffffff;
    }
  }
`;
const ButtonContainer = styled.div`
  width: calc(100% - 40px);
  display: flex;
  margin-top: 23px;
  justify-content: end;
  button:nth-child(1) {
    border: none;
    background-color: #ffffff;
    color: #52b6ff;
    font-size: 15px;
    margin-right: 10px;
  }
  button:nth-child(2) {
    width: 84px;
    height: 35px;
    border: none;
    background-color: #52b6ff;
    border-radius: 5px;
    color: #ffffff;
    font-size: 15px;
  }
`;
