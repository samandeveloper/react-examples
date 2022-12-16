import React from "react";
import locationLogo from "../images/Fill 219.png"

export default function Main(props){
  return(
    <div className="cardTotal">
      <img className="cardImage" src={`${props.imageUrl}`}/>

      <section className="card-first-line">
        <img className="cardLocation" src={locationLogo}/>
        <p className="cardCountry">{props.location.toUpperCase()}</p>
        <a className="cardGoogle" href={`${props.googleMapsUrl}`}>View on Google Maps</a>
      </section>

      <h3 className="cardTitle">{props.title}</h3>
      <h5 className="cardDate">{`${props.startDate}-${props.endDate}`}</h5>
      <p className="cardDescription">{props.description}</p>
    
    </div>
  )
}