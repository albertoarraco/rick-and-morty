import {combineReducers} from '@reduxjs/toolkit';
import episodesReducer from './episodes';

const reducers = combineReducers({
	episodes: episodesReducer
});

export default reducers;
