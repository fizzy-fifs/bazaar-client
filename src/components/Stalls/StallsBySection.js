import React, { useEffect, useState } from 'react'
import Products from '../ViewProduct/Products'
import './Stalls.css'
import { Link } from 'react-router-dom';
import StallsHooks from '../../apiCalls/Stalls/fetchStalls';
import stallIsNotInLocalStorage from '../../helpers/stallIsNotInLocalStorage';

const StallsBySection = (props) => {
  
  const stalls = JSON.parse(localStorage.getItem('stalls'));

  return (
    <div>
      {stalls.filter( stall => stall.section === props.currentSection).map(selectedStall => {
        return (
          
          <div id="eachStall"> 
          <Link to={`/stalls/${selectedStall._id}`}  >
             <header> { selectedStall.name } </header>
          </Link>

            <div id="eachStall-products">
							<Products stall={selectedStall._id} />
            </div> 
          </div>
         
        )
      })}
    </div>
  )
}

export default StallsBySection
