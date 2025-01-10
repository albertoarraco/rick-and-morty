import React, {useEffect, useState} from 'react';
import {NavLink, useLocation, useRoutes} from "react-router-dom";

const Menu = () => {
	const location = useLocation();
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		setVisible(false)
	}, [location])

	return (
		<>
			<button className={'menu-action'} onClick={() => setVisible(true)}>
				<span />
				<span />
				<span />
			</button>
			<div className={`menu ${visible ? 'visible' : ''}`}>
				<ul>
					<NavLink to={'/episodes'} className={'link'}>Episodes</NavLink>
					<p className={'link'}>Characters</p>
					<p className={'link'}>Locations</p>
				</ul>
				<button className={'link'} onClick={() => setVisible(false)}>
					Close
				</button>
			</div>
		</>
	)
}

export default Menu;
