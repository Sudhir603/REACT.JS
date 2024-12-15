import styled from "styled-components";
import RoleDice from "./RoleDice";
import NumberSelector from "./NumberSelector";

const TotalScore = () => {
    return <ScoreContainer>
        <h1>0</h1>
        <p>Total Score</p>
    </ScoreContainer>
};

export default TotalScore;

const ScoreContainer = styled.div `

h1{
font-size: 100px;
font-weight: 500;
line-height: 150px;
margin-left: 40px;
}
p{
font-size: 24px;
font-weight: 600;
line-height: 3px;
margin-left: 20px;
}
`;