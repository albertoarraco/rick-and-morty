import React from 'react';
import {useParams} from "react-router-dom";

const CharactersPage = () => {
	const {id} = useParams();

	console.log(id);

	return <h1>Characters</h1>
}

export default CharactersPage;
