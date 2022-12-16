import React from "react"
import "./style.css"
import Header from "./Header.js"
import Body from "./Body.js"

export default function App() {
    const [user, setUser] = React.useState("Joe")
    return (
        <main>
            <Header name={user}/>
            <Body name={user}/>
        </main>
    )
}
