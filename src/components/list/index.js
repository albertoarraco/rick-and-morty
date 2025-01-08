import React from 'react';
import {Link} from "react-router-dom";

const ListComponent = ({type, data, loading, refreshing, error}) => {
	if(loading) {
		return <h1>Loading...</h1>
	}

	const renderItems = () => (
		data?.results?.map(item => (
			<li key={item.id}>
				<Link to={`/${type}/${item.id}`}>
					{item.name}
				</Link>
			</li>
		))
	)

	return <ul>{renderItems()}</ul>
}

export default ListComponent;
