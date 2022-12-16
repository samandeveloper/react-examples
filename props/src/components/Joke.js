import React from "react";

function Joke(props){
  console.log(props.Setup)  //answer is 5 jokes
  return(
    <div>
      <p>Setup: {props.Setup} </p>
      <p>Punchline: {props.Punchline} </p>
    </div>
  )
}

export default Joke