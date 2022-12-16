import React from "react";
import Joke from "./components/Joke.js"

function App(){
  const item = [{a:1,b:2,c:3}] 
  return(
    <div>
      <Joke 
        Setup2 = {item}
        Setup3 ={true}
        Setup4 = {10}
        Setup = "I got my daughter a fridge for her birthday."
        Punchline = "I can't wait to see her face light up when she opens it."
      />
      <Joke 
        Setup = "How did the hacker escape the police?"
        Punchline = "He just ransomware!"
      />
      <Joke 
        Setup = "Why don't pirates travel on mountain roads?"
        Punchline = "Scurvy."
      />
      <Joke 
        Setup = "Why do bees stay in the hive in the winter?"
        Punchline = "Swarm."
      />
      <Joke 
        Setup = "What's the best thing about Switzerland?"
        Punchline = "I don't know, but the flag is a big plus!"
      />
    </div>
  )
}

export default App