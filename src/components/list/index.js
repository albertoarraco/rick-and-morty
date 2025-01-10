import React from 'react';
import {Link} from "react-router-dom";
import PlaceholderItemList from "../placeholder";

const ListComponent = ({
	type, data, loading, refreshing, error, classList = 'default', itemTemplate,
}) => {
	if(loading || refreshing) {
		return <PlaceholderItemList placeholderMessage={`Loading ${type}...`}/>
	}

	const renderItems = () => {
		return data?.results?.map(item => (
			<li key={item.id}>
				{
					itemTemplate
					? itemTemplate(item)
					: (<Link to={`/${type}/${item.id}`}>
						{item.name}
					</Link>)
				}
			</li>
		))
	}

	return (
		<div className={`list-container appear`}>
			<h2>{type}</h2>
			<ul className={`list-component ${classList}-list`}>
				{renderItems()}
			</ul>
		</div>
	)
}

export default ListComponent;
