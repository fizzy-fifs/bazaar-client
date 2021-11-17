import React from 'react'
import axios from 'axios'

const fetchProducts = async () => {
  const data = await axios.get('https://bazaar-server.herokuapp.com/api/products')
                .then((res) => res.data)
  return data;
};

export default fetchProducts
