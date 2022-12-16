import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data"
console.log(data)  //returns data.js array

//import card images:
//import card1Image from "./images/image 12.png"


export default function App() {
    //use of array.map instead of hardcodeing in App.js
    const cardElement = data.map(item =>{
        return ( 
        <Card key={item.id} 
        //we keep the key and instead of all the below we can write item = {item} now we should 
        // item ={item}
        //Optional:instead of the above line we can use the "spread object" from ES6" which gives a copy of the item object
        //now we can go in the Cards.js and remove all the item there
        {...item}
        />
        )
    })
    return (
        <div>
            <Navbar />
            <Hero />
            {/* <Card 
                // img="katie-zaferes"
                // rating="5.0"
                // reviewCount={6}
                // location="USA"
                // title="Life Lessons with Katie Zaferes"
                // price={136}
            /> */}
            <section className="cards-list">
                 {cardElement}
            </section>
            
        </div>
    )
}