import React from "react";
import jokesData from "../jokesData";

function Joke(props){
  const [isShown, handleState] = React.useState(true) 

  function handleToggle(){
    handleState(prevState => !prevState)
  }
  return(
    <div>
       
      <p>Setup: {props.Setup} </p>
      {/* <p>Punchline: {props.Punchline} </p> */}
      {isShown && <h3>Punchlione: {props.Punchline}</h3>}
      <button onClick={handleToggle}>click Punchline</button>
      <hr/>
    </div>
  )
}

export default Joke