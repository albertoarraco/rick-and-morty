import React from 'react';
import {useParams} from "react-router-dom";

const PlaceholderItemList = () => {
	const {id} = useParams();

	const type = id ? 'detail' : 'list',
		loaders = {
			list: (
				<lottie-player src="https://lottie.host/32088d8f-efaf-4463-8681-6f0e8ac3a783/SRpeTrRQjE.json"
				               background="##FFFFFF"
				               speed="1" style={{width: '50%', height: 'auto', margin: 'auto'}} loop autoplay direction="1"
				               mode="normal"></lottie-player>
			),
			detail: (
				<img
					src={"https://media1.giphy.com/media/3o7aD2d7hy9ktXNDP2/giphy_s.gif"}
					alt={"portal"}/>
			)
		};

	return (
		<div className={'loading-placeholder'}>
			{loaders[type]}
			<h3>Loading {type}....</h3>
		</div>
	);
}

export default PlaceholderItemList;
