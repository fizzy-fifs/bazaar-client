import React, { useEffect, useState, Component } from 'react';
import axios from 'axios';

const useSections = () => {
	const [sections, setSections] = useState([]);

	const fetchSections = async () => {
		await axios
			.get(`https://bazaar-server.herokuapp.com/api/sections`)
			.then((res) => setSections(res.data));
	};

	useEffect(() => fetchSections(), []);
	console.log([sections])
	localStorage.setItem('sections', JSON.stringify(sections))
	return [sections];
};

export default useSections