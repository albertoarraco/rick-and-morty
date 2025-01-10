import React from 'react';
import {Link} from "react-router-dom";

const NotFoundPage = () => (
	<div className="home-page">
		<div className={'link-wrapper'}>
			<Link to={'/episodes'} className={'home-link'}
			      style={{'--bg-image': 'url(https://cdn.themedizine.com/2020/02/rick-morty-influencias-1000x667.jpg)'}}>
			<span>Episodes</span>
			</Link>
		</div>
		<div className={'link-wrapper'}>
			<div className={'home-link'} style={{'--bg-image': 'url(https://preview.redd.it/nq7j6ngb4kn71.jpg?width=1080&crop=smart&auto=webp&s=cfd043648838495ab7058f91c50e558841d08bde)'}}>
				<span>Characters</span>
				<small>Work in progress</small>
			</div>
		</div>
		<div className={'link-wrapper'}>
			<div className={'home-link'}
			   style={{'--bg-image': 'url(https://haztucuadro.com/cdn/shop/products/wallpaperbetter_98__pagina.jpg?v=1676744498)'}}>
				<span>Locations</span>
				<small>Work in progress</small>
			</div>
		</div>
	</div>
)

export default NotFoundPage;
