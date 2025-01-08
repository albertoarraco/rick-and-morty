import React from 'react';
import {Provider} from 'react-redux'
import {store, persistor} from './store/configureStore';
import {PersistGate} from "redux-persist/integration/react";
import Router from "./router";

const App = () => {
	return (<>
		<Provider store={store} stabilityCheck="always">
			<PersistGate loading={null} persistor={persistor}>
				<Router />
			</PersistGate>
		</Provider>
	</>);
};

export default App;
