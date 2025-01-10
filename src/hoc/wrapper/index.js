import React from 'react';
import Header from "../../layout/header";
import Footer from "../../layout/footer";
import {shallowEqual, useSelector} from "react-redux";

const Wrapper = ({ children }) => {
	const theme = useSelector(state => state.config.theme, shallowEqual);

	return (
		<div className={`wrapper ${theme}`}>
			<Header />
			<main>
				{children}
			</main>
			<Footer />
		</div>
	)
}

export default Wrapper;
