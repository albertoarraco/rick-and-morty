import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	theme: 'dark'
}

const configurationSlice = createSlice({
	name: 'configuration',
	initialState,
	reducers: {
		switchTheme: (state, action) => {
			const stateCloned = state.theme;
			state.theme = stateCloned === 'dark' ? 'light' : 'dark'
		}
	}
});
export const {switchTheme} = configurationSlice.actions;

export default configurationSlice.reducer;
