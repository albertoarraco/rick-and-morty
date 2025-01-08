import {configureStore} from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist-indexeddb-storage';
import rootReducer from "../reducers";
import hardSet from "redux-persist/es/stateReconciler/hardSet";
import {thunk} from "redux-thunk";

const persistConfig = {
	key: "rick-morty",
	storage: storage('rick-morty'),
	version: 1,
	stateReconciler: hardSet
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	devTools: process.env.NODE_ENV !== 'production',
	middleware: () => [thunk],
	maxAge: 50,
});

export const persistor = persistStore(store);
