import React from 'react';
import {useParams} from "react-router-dom";

const LocationsPage = () => {
	const {id} = useParams();

	console.log(id);

	return <h1>Locations</h1>
}

export default LocationsPage;
