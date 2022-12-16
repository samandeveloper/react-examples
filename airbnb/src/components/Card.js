import React from "react"

export default function Card(props) {
    console.log(props)  //item is an object with all of the properties inside it
    //JS if condition for sold out/online or nothing badge:
    let badgeText;
    if(props.openSpots === 0){
        badgeText = "SOLD OUT"
    }else if(props.location === "Online"){
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
        {/* optional: instead of the above lines we can use spread object in App.js so we can remove the item here */}
            {badgeText && <div className="card--badge">{badgeText}</div>}
            {/* <img src={`../images/${props.coverImg}`} className="card--image" /> */}
            <img src={ process.env.PUBLIC_URL +`/images/${props.coverImg}`} className="card--image" />
            <div className="card--stats">
                <img src={process.env.PUBLIC_URL + "/images/star.png"} className="card--star" />
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>

        </div>
    )
}