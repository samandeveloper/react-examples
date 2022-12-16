import React from "react"
import boxes from "./boxes"
import Box from "./components/Box.js"
import "./style.css"

export default function App() {
    const [squares, setSquares] = React.useState(boxes)
    function toggle(id) {
        setSquares(prevState => {
            return prevState.map(square =>{
                return square.id === id ? {...square, on: !square.on} : square
            })
        })
    }
    
    const squareElements = squares.map(square => (
        // <Box 
        //     key={square.id} 
        //     id={square.id}
        //     on={square.on} 
        //     toggle={toggle}
        // />

        //we can keep the Box component like above or remove the id and add the id in the toggle
        //now in the Box component we can remove the function and just use the props.toggle
        <Box 
            key={square.id} 
            // id={square.id}
            on={square.on} 
            toggle={() => toggle(square.id)}
        />
    ))
    return (
        <main>
            {squareElements}
        </main>
    )
}
