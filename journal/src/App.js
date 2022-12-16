import React from "react";
import data from "./data.js"
import Navbar from "./components/Navbar.js"
import Main from "./components/Main.js"

export default function App(){
  const cardsElement = data.map(item =>{
    return(
      <Main key={item.id} 
      {...item}
      />
    )
  })

  return(
    
    <div>
      <Navbar />
      {cardsElement}
    </div>
  )
}