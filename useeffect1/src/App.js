import React from "react"
import WindowTracker from "./WindowTracker.js"

export default function App() {
    const[show, setshow] = React.useState(true) 
    
    function handleToggle(){
        console.log(show)
        setshow(preShow => !preShow)
    }
    return (
        <div className="container">
            <button onClick={handleToggle}>
                Toggle WindowTracker
            </button>
            {/* <WindowTracker/> */}
            {/* use && to say if show=true then run WindowTracker component */}
            {show && <WindowTracker/>}      
        </div>
    )
}
