import React from 'react';
import {persistor} from "../../store/configureStore";

const Header = () => {
	return (<footer>
		<p>Si Rick lo leyera, probablemente destruiría este footer en un microsegundo. Morty dice que está bien, pero, ¿a quién le importa lo que diga Morty?</p>
		<p><small>© 2025, Rick y Morty Fan Page</small></p>
	</footer>)
}

export default Header;
