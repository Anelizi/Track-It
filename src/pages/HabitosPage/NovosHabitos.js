import styled from "styled-components";
import { FiTrash2 } from "react-icons/fi";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import { useContext } from "react";
import { ConstantContext } from "../../context/ConstantContext";

export default function NovoHabito({
  habitList,
  setHabitList,
  daysWeek,
}) {
  const { token } = useContext(ConstantContext);

  function delet(id) {
    if (window.confirm("Deseja realmente deletar esse hábito??") === true) {
      const deletHabit = habitList.filter((h) => h.id !== id);
      setHabitList(deletHabit);

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      axios
        .delete(`${BASE_URL}habits/${id}`, config)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => console.log(err));
    }
  }

  return (
    <Container data-test="habit-container">
      {habitList.reverse().map((h) => (
        <ContainerNovoHabito key={h.id} data-test="habit-container">
          <div>
            <h3 data-test="habit-name">{h.name}</h3>
            <Week>
              {daysWeek.map((d) => (
                <button
                  key={d.id}
                  disabled={h.days.includes(d.id) ? true : false}
                  data-test="habit-day"
                >
                  {d.day}
                </button>
              ))}
            </Week>
          </div>
          <Icon onClick={() => delet(h.id)} data-test="habit-delete-btn"/>
        </ContainerNovoHabito>
      ))}
    </Container>
  );
}

const Container = styled.div`
 width: 100%;
 display: flex;
 justify-content: center;
 flex-direction: column;
 justify-items: center;
 align-items: center;
`

const ContainerNovoHabito = styled.div`
  width: calc(100% - 40px);
  background-color: #ffffff;
  height: 91px;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
  div {
    width: calc(100% - 40px);
    margin-top: 10px;
  }
  h3 {
    font-size: 20px;
    margin-bottom: 10px;
    color: #666666;
    font-size: 20px;
  }
`;
const Icon = styled(FiTrash2)`
  margin-top: 10px;
  cursor: pointer;
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
    &:disabled {
      background-color: #cfcfcf;
      color: #ffffff;
    }
  }
`;
