import {combineReducers} from '@reduxjs/toolkit';
import configReducer from './config';
import episodesReducer from './episodes';

const reducers = combineReducers({
	config: configReducer,
	episodes: episodesReducer
});

export default reducers;
