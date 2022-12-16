import React from "react"
import boxes from "./boxes"
import "./style.css"
let result;
let newArray=[]; 
let test;

export default function App(props) {
    const [squares, setSquares] = React.useState(boxes)

   
 
    // 1.use a ternary to determine the backgroundColor.
    // If darkMode is true, set it to "#222222"
    // If darkMode is false, set it to "#cccccc"
 
    // const styles = {
    //     // backgroundColor: props.darkMode ? "#222222" : "#cccccc"
    //     backgroundColor: test === 0 ? "blue" : "green"
    // }
    
    //2.color the odd and even squares in different color
    const squareElements = squares.map(square => (
        <div style={{backgroundColor: test === 1 ? "blue" : "green"}} className="box" key={square.id}>
            {test = square.id % 2}{console.log(test)}
        </div>
    ))
    return (
        <main>
            {squareElements}
        </main>
    )
}
