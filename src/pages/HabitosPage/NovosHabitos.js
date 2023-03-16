import styled from "styled-components"
import { FiTrash2 } from "react-icons/fi";

export default function NovoHabito(){
    return(
        <ContainerNovoHabito>
            <div>
              <h3>Ler 1 capítulo de livro</h3>
              <FiTrash2/>
            </div>
          </ContainerNovoHabito>
    )
}
const ContainerNovoHabito = styled.div`
  width: calc(100% - 40px);
  background-color: #ffffff;
  height: 91px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  div{
    width: calc(100% - 40px);
    display: flex;
    justify-content: space-between;
  }

`