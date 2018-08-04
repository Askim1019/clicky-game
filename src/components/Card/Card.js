import React from "react";
import "./Card.css";


const Card = props => (
  <div className="col-md-4 card">
    <div className="card-body">
      <img alt="" src={props.image} />
      <span>{props.name}</span>
    </div>
  </div>
);

export default Card;