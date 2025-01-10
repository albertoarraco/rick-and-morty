import React from 'react';
import {Provider} from 'react-redux'
import {store, persistor} from './store/configureStore';
import {PersistGate} from "redux-persist/integration/react";
import Router from "./router";
import EnterAnimation from "./components/enter-animation";

const App = () => {
	return (<>
		<Provider store={store} stabilityCheck="always">
			<PersistGate loading={null} persistor={persistor}>
				<EnterAnimation />
				<Router />
			</PersistGate>
		</Provider>
	</>);
};

export default App;
