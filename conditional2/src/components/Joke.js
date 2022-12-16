import React from "react";
import jokesData from "../jokesData";

function Joke(props){
    /**when click on the punchline button, hide punchline*/
  const [isShown, handleState] = React.useState(true) 

  function handleToggle(){
    handleState(prevState => !prevState)
  }
  return(
    <div>
      <p>Setup: {props.Setup} </p>
      {isShown && <h3>Punchlione: {props.Punchline}</h3>}
      {/* <button onClick={handleToggle}>Show Punchline</button> */}
      {/* way1: using && condition */}
      {/* <button onClick={handleToggle}>{!isShown && <p>Show Punchline</p>} {isShown && <p>Hide Punchline</p>}</button> */}
      {/* way2: using ternary condition*/}
      <button onClick={handleToggle}>{isShown ? "Hide" : "Show"} Punchline</button>
      <hr/>
    </div>
  )
}

export default Joke