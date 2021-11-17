import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Products from '../../ViewProduct/Products'
import './StallsByUser.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import RequestStall from '../../RequestStall/RequestStall';
import ListProducts from '../../ListProducts/ListProducts';
import SectionTitle from '../../Sections/SectionTitle';
import Cookies from 'universal-cookie';
import StallsHook from '../../../apiCalls/Stalls/fetchStalls';
import isNotInLocalStorage from '../../../helpers/sectionIsNotInLocalStorage';

const cookies = new Cookies()
const signedInUser = cookies.get('user') || ''
const user = signedInUser._id || ''
  


const StallsByUser = () => {
  isNotInLocalStorage('stalls') && <StallsHook />

  const myStalls = JSON.parse(localStorage.getItem('stalls')).filter(eachStall => eachStall.user === user);
  
  console.log(myStalls)
  
  return (
    <div id="stallByUser">
      <div id="stallContainer"> 
        { (myStalls.length === 0) && (<h1 id="noStall"> You Currently Do not Own A Stall <RequestStall /> </h1> )}
        { (myStalls.length > 0) && ( 
          <div>
            <header className="eachStallName" > 
              <h1 className="myStallName" style={{ color: "white" }}> { myStalls[0].name } </h1>
              <div className="ratings">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStarHalfAlt} />
                    <p>{Math.floor(Math.random()* 10)+ 2} reviews</p>
                  </div>
            </header>
            <div className="mySection"> 
              { <SectionTitle section={myStalls[0].section} /> }
            </div> 
            <div className="list-products"> 
                <ListProducts section={myStalls[0].section} stall={myStalls[0]._id} /> 
            </div>

            <div id="eachStall-products"> 
            <Products stall={ myStalls[0]._id } /> 
            </div> 
          </div>  
        )}





    </div> 
  </div>
  )
}


export default StallsByUser

{/* <header className="mySection"> 
<h1 className="myStallName" style={{ color: "black" }}> { <SectionTitle section={stalls[0].section} /> } </h1>
</header> */}

