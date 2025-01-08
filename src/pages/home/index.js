import React from 'react';
import {Link} from "react-router-dom";

const HomePage = () => {
	return (
		<>
			<h1>Home</h1>
			<Link to={'episodes'}>Episodes</Link>
			<Link to={'characters'}>Characters</Link>
			<Link to={'locations'}>Locations</Link>
		</>
	)
}

export default HomePage;