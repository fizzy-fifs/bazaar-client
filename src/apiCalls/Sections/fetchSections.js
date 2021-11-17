import React, { useEffect, useState, Component } from 'react';
import axios from 'axios';
	
const fetchSections = async () => {
	const data = await axios.get(`https://bazaar-server.herokuapp.com/api/sections`)
								.then((res) => res.data );
	return data;
};

export default fetchSections
