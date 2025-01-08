import React from 'react';
import Header from "../../layout/header";
import Footer from "../../layout/footer";

const Wrapper = ({ children }) => {
	return (
		<div className="wrapper">
			<Header/>
			<main>
				{children}
			</main>
			<Footer />
		</div>
	)
}

export default Wrapper;
