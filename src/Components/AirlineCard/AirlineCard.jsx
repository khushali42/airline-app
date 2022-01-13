import React from 'react'
import './AirlineCard.css'
export default function AirlineCard(props) {
    return (
        <div className="col-1 card" id="card">
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <img src={props.logo} className="card-text"/>
              <p className="card-text">Country: {props.country}</p>
              <p className="card-text">Headquarters: {props.established}</p>
              <p className="card-text">Established: {props.head_quaters}</p>
              <p className="card-text">Website: {props.website}</p>
              <p className="card-text">"{props.slogan}"</p>
        </div>
      </div>
    )
}
