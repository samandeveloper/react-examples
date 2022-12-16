import React from "react"
import mrwhiskerson from "./images/mr-whiskerson.png"
import fluffykins from "./images/fluffykins.png"
import felix from "./images/felix.png"
import pumpkin from "./images/pumpkin.png"
import Contact from "./components/Contact.js"

//add the props with any name we want--in fact we are passing values to our component (Contact)
//props in React are as same as attributes in html

function App() {
    return (
        <div className="contacts">
            <Contact 
              // img = "./images/mr-whiskerson.png"
              img = {mrwhiskerson}
              name = "Mr. Whiskerson"
              phone = "(212) 555-1234"
              email = "mr.whiskaz@catnap.meow"
            />
            <Contact 
              img= {fluffykins}
              name="Fluffykins"
              phone="(212) 555-2345"
              email="fluff@me.com"
            />
            <Contact 
              img= {felix}
              name="Felix"
              phone="(212) 555-4567"
              email="thecat@hotmail.com"
            />
            <Contact 
              img= {pumpkin}
              name="Pumpkin"
              phone="(0800) CAT KING"
              email="pumpkin@scrimba.com"
            />     
        </div>
    )
}

export default App