import React, { useEffect, useState } from 'react';
import axios from 'axios';

  const fetchStalls = async () => {
    const data = await axios.get('https://bazaar-server.herokuapp.com/api/stalls')
                  .then((res) => res.data)
    return data;
  };

export default fetchStalls
