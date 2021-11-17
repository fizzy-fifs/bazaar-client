import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router';
import Cookies from 'universal-cookie';
import axios from 'axios';
import addNotification from '../notices/notice';
import Signin from '../components/SignIn/SignIn';

const useSignInHooks = async(user, event) => {
  console.log(user)
  const cookies = new Cookies();
  const [redirect, setRedirect] = useState(false)
 
  
  const userJson = JSON.stringify(user);

  await axios
    .post('https://bazaar-server.herokuapp.com/api/users/login', userJson, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((res) => res.data)
    .then((data) => {
      if (data.msg) {
        addNotification(data.msg, 'danger')
      } else {
        cookies.set('user', data, { path: '/' });
        addNotification('Logged in successfully', 'success')
        setRedirect(true)
        // window.location.reload()
      }
    });  
  
  console.log(redirect)
  console.log(cookies.get('user'))

  if (redirect) {
    return <Redirect to="/home" />
  };

  
}

export default useSignInHooks
