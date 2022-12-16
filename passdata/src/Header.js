import React from "react"

export default function Header(props) {
    /**
     * 1. Raise state up a level and pass it down to both the
     * Header and Body components through props.
     */
    // const [user, setUser] = React.useState("Joe")
    
    return (
        <header>
            {/* <p>Current user: {user}</p> */}
            <p>Current user: {props.name}</p>
        </header>
    )
}
