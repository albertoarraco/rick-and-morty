import React from 'react';
import {persistor} from "../../store/configureStore";

const Header = () => {
	return (<footer>
		<small>Made with love by Alberto Arracó</small>
		<button onClick={() => persistor.purge()}>Clear</button>
	</footer>)
}

export default Header;
