import React, { useEffect, useState } from 'react';
import Products from '../../ViewProduct/Products';
import './StallsById.css';
import background from "./src/background.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";


const StallsById = (props) => {
  const stalls = JSON.parse(localStorage.getItem('stalls'));
  
  console.log(stalls)
  
  return (
    <div>
      {Object.entries(stalls.filter( (stall => stall._id === props.stallId)).map(selectedStall => {
        return (
          <div id="stallById">
            <div id="stallContainer"> 
              <header className="eachStallName" > 
                <h1> { selectedStall.name } </h1>
                <div className="ratings">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStarHalfAlt} />
                  <p>{Math.floor(Math.random()* 10)+ 2} reviews</p>
                </div>
              </header>
              <h3>All products</h3>
              <div id="eachStall-products">
                <Products stall={selectedStall._id} />
              </div> 

            </div>
          </div>
        )
      }))}
    </div>
  )
}

export default StallsById
