import React, {useState, useEffect} from 'react';
import Products from '../../components/Products';
import Cookies from 'universal-cookie';
import axios from 'axios';
import RequestStall from '../../components/RequestStall/RequestStall';
import './StallProfilePage.css';
import ListProducts from '../../components/ListProducts/ListProducts';

const cookies = new Cookies();

let signedInUser = cookies.get('user')
let x = '60c0d0591be0426f8bcb333c'


const useMyStalls = () => {
  const [myStalls, setMyStalls] = useState([]);
  
  const fetchMyStalls = async () => {
    await axios
      .get(`https://bazaar-server.herokuapp.com/api/stalls/user/${signedInUser._id}`)
      .then((res) => setMyStalls(res.data))
  };
  useEffect(() => fetchMyStalls(), [])

  return [myStalls]
}


function StallProfilePage(props) {
  const [myStalls] = useMyStalls();

  return (
    <div>
      <div className="allMyStalls">
        { (myStalls.msg === "No stalls") ? (<h1 id="noStall"> You Currently Do not Own A Stall <RequestStall /> </h1> ) : (myStalls.map((myStall) =>  {
          return <>
            <header> { myStall.name } </header>

            <div className="myProducts">
              <Products stall={myStall._id} />
            </div>
 
            

            </>
          }))
        } 
        
      </div>
      
    </div>
  )
}

export default StallProfilePage