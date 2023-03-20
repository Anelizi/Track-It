import { BsCheckSquareFill } from "react-icons/bs";
import styled from "styled-components";
export default function Tarefas({clickHabit, habit}){

    return(
        <Tarefa data-test="today-habit-container">
            <div>
              <h4 data-test="today-habit-name">{habit.name}</h4>
              <p data-test="today-habit-sequence">Sequência atual: <span id="atual">{""} dias</span> </p>
              <p data-test="today-habit-record">Seu recorde: <span id="recorde">{""} dias</span></p>
            </div>
            <Icon data-test="today-habit-check-btn" onClick={clickHabit}/>
          </Tarefa>
    )
}

const Tarefa = styled.div`
  width: 100% ;
  height: 94px;
  background-color: #ffffff;
  border-radius: 5px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    width: 100% ;
    margin-left: 10px;
    color: #666666;
    h4 {
      font-size: 20px;
      margin-bottom: 10px;
    }
    p {
      font-size: 13px;
    }
  }
`;
const Icon = styled(BsCheckSquareFill)`
  font-size: 80px;
  margin-right: 10px;
  color: #E7E7E7;
  cursor: pointer;
`;