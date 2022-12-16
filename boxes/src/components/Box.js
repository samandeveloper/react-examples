import React from "react"

export default function Box(props) {
    const styles = {
        backgroundColor: props.on ? "#222222" : "transparent"
    }
    return (
        <div 
            style={styles} 
            className="box"
            // onClick={()=>props.toggle(props.id)}
            //or : We define the function in the App.js so we can remove it in the line below 
            onClick={props.toggle}
        >
        </div>
    )
}