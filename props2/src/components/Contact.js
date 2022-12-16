import React from "react"
import phoneIcon from "../images/phone-icon.png"
import mailIcon from "../images/mail-icon.png"
// 1.fix the bug, now that we've destructured the props object
export default function Contact({img, name, phone, email}) {
    return (
        <div className="contact-card">
            <img 
                src={img}
            />
            <h3>{name}</h3>
            <div className="info-group">
            <img 
                src={phoneIcon} 
            />
                <p>{phone}</p>
            </div>
            <div className="info-group">
                <img 
                    src={mailIcon} 
                />
                <p>{email}</p>
            </div>
        </div>
    )
}

// const person = {
//     img: "./images/mr-whiskerson.png",
//     name: "Mr. Whiskerson",
//     phone: "(800) 555-1234",
//     email: "mr.whiskaz@catnap.meow"
// }

// const {img, name} = person
// console.log(name)