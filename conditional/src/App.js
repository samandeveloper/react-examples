import React from "react";
import Joke from "./components/Joke.js"
import jokesData from "./jokesData.js"

//instead of adding the jokles in the App.js we add them in the jokesData.js (a seperate file) in src--not in a components folder
function App(){
  console.log(jokesData)    //returns the jokes as an array of object 
  //use the array.map to show the jokes
  const jokeElements = jokesData.map(joke => {
      return <Joke key={joke.id} id={joke.id} Setup={joke.setup} Punchline={joke.punchline} />
  })
  return(
    <div>
      {jokeElements}
    </div>
  )
}

export default App