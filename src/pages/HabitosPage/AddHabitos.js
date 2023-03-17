import styled from "styled-components"

export default function AddHabitos(){
    return(
        <ContainerHabito data-test="habit-create-container">
            <input type="text" placeholder="nome do hábito" data-test="habit-name-input"/>
            <Semana>
              <button>D</button>
              <button>S</button>
            </Semana>
            <ButtonContainer>
              <button data-test="habit-create-cancel-btn">Cancelar</button>
              <button data-test="habit-create-save-btn">Salvar</button>
            </ButtonContainer>
          </ContainerHabito>
    )
}
const ContainerHabito = styled.div`
  width: calc(100% - 40px);
  height: 180px;
  border-radius: 5px;
  background-color: #ffffff;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  input{
    margin-top: 20px;
  }
`
const Semana = styled.div`
  width: calc(100% - 40px);
  display: flex;
  button{
  width: 30px;
  height: 30px;
  background-color: #ffffff;
  border: 1px solid #D4D4D4;
  border-radius: 5px;
  color: #DBDBDB;
  margin-right: 5px;
  font-size: 20px;
  }
`
const ButtonContainer = styled.div`
  width: calc(100% - 40px);
  display: flex;
  margin-top: 23px;
  justify-content: end;
  button:nth-child(1){
    border: none;
    background-color: #ffffff;
    color: #52B6FF;
    font-size: 15px;
    margin-right: 10px;
  }
  button:nth-child(2){
    width: 84px;
    height: 35px;
    border: none;
    background-color: #52B6FF;
    border-radius: 5px;
    color: #ffffff;
    font-size: 15px;
  }
` 