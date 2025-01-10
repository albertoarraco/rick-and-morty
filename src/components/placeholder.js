import React from 'react';
import {useParams} from "react-router-dom";

const PlaceholderItemList = () => {
	const {id} = useParams();

	const type = id ? 'detail' : 'list',
		loaders = {
			list: (
				<lottie-player src="https://lottie.host/28e465df-8743-4934-8694-0a1b0d37b6d6/AmuIpbm5iw.json"
				               speed="1" loop autoplay direction="1"
				               mode="normal"></lottie-player>
			),
			detail: (
				<img
					src={"https://media1.giphy.com/media/3o7aD2d7hy9ktXNDP2/giphy_s.gif"}
					alt={"portal"}/>
			)
		};

	return (
		<div className={`loading-placeholder loading-${type}`}>
			{loaders[type]}
			<h3>Loading {type}....</h3>
		</div>
	);
}

export default PlaceholderItemList;
