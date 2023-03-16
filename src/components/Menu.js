import { Link } from "react-router-dom"
import styled from "styled-components"
import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css";

export default function Menu(){
    return(
        <MenuContainer>
            <Style>
                <Link to="/habitos">
                    <p>Hábitos</p>
                </Link>
                <Link to="/hoje">
                    <button>
                        <CircularProgressbar
                            value={""}
                            text={"Hoje"}
                            background
                            backgroundPadding={6}
                            styles={buildStyles({
                                backgroundColor: "#52B6FF",
                                textColor: "#ffffff",
                                pathColor: "#ffffff",
                                trailColor: "transparent",
                            })}
                        />
                    </button>
                </Link>
                <Link to="/historico">
                    <p>Histórico</p>
                </Link>
            </Style>
        </MenuContainer>
    )
}
const MenuContainer = styled.div`
    width: 100vw;
    height: 70px;
    background-color: #ffffff;
    position: fixed;
    bottom: 0;
    left: 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const Style = styled.div`
    display: flex;
    justify-content: space-between;
    justify-items: center;
    align-items: center;
    margin: 0 20px;
    a{
        text-decoration: none;
    }
    p{
       color: #52B6FF;
       font-size: 18px;
    }
    button{
        width: 95px;
        border: none;
        background-color: transparent;
        margin-bottom: 30px;
    }
`