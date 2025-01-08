import React from 'react';
import Menu from "./menu";
import Search from "./search";
import {Link} from "react-router-dom";

const Header = () => {
	return (
		<header>
			<Menu />
			<Link to={'/'}>
				<img src={'https://img.icons8.com/?size=30&id=57324&format=png'} alt={'Logo Rick&Morty'}/>
			</Link>
			<Search/>
		</header>
	)
}

export default Header;
