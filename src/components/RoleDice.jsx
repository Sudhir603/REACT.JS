
import { useState } from "react";
import styled from "styled-components";
const RoleDice = () => {

    const [currentDice,setCurrentDice] = useState(1);
    const generateRandomNumber = (min,max) => {
        return Math.floor(Math.random() * (max-min) + min);
    };
    const roleDice = () => {
        const randomNumber = generateRandomNumber(1,7);
        setCurrentDice((prev)=> randomNumber);
    }
  return (
    <DiceContainer >
        <div className="dice" onClick={roleDice}> 
            <img src={`/images/dice_${currentDice}.png`} alt="dice 1" />
        </div>
        <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

export default RoleDice;

const DiceContainer = styled.div`
display: flex;
align-items: center;
flex-direction: column;
margin-top: 48px;
.dice{
    cursor: pointer;
}
p{
    font-size: 24px;
}

`;