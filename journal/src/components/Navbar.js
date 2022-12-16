import React from "react";
import earthLogo from "../images/Fill 213.png"
import textEarthLogo from "../images/my travel journal..png"

export default function Navbar(){
  return(
    <div className="nav">
      <img className="earthLogo" src={earthLogo}/>
      <img className = "textEarthLogo" src={textEarthLogo}/>
    </div>
  )
}