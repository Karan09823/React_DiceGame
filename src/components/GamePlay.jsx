import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";
import TotalScore from "./TotalScore";
import styled from "styled-components";
import { useState } from "react";
import { Button, OutlineButton } from "../styled/Button";
import Rules from "./Rules";


const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [currentDice, setCurrentDice] = useState(1);
  const [selectedNumber, setSelectedNumber] = useState();
  const[error,setError]=useState("");
  const[showRules,setShowRules]=useState(false);

  const resetScore=()=>{
    setScore(0);
  }

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    if(!selectedNumber){
      setError("You Have Not Selected Any number ");
      return;
    }

    setError("");


    const random = generateRandomNumber(1, 7);
    setCurrentDice((prev) => random);

   

    if (selectedNumber === random) {
      setScore((prev) => prev + random);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(undefined);
  };

  return (
    <>
      <MainContainer>
        <div className="top_section">
          <TotalScore score={score} />
          <NumberSelector
          error={error}
            selectedNumber={selectedNumber}
            setSelectedNumber={setSelectedNumber}
          />
        </div>
        <RoleDice currentDice={currentDice} roleDice={roleDice} />
        <div className="btns">
          <OutlineButton onClick={resetScore}>Reset</OutlineButton>
          <Button onClick={()=>setShowRules((prev)=>!prev)}>{showRules ? "Hide":"Show"} Show Rules</Button>
        </div>
       {showRules && <Rules/>}
      </MainContainer>
    </>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }

  .btns{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:10px;
  }
`;


