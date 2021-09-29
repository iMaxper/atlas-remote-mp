import React from 'react';
import '../App.css';
import CardImage from './CardImage.js';
import CardInfo from './CardInfo.js';

function Card(props) {
  return(
    <li className="cards-item fourth">
      <div className="card">
        <div className="card-content">
            <CardImage photo={props.photo}/>
            <CardInfo name= {props.name}
             description={props.description}
              latitude={props.latitude}
               longitude={props.longitude}
               website={props.website}/>
        </div>
      </div>
    </li>
  );
}

export default Card;
