import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getData} from "./api";

export const getEpisodes = createAsyncThunk('episodes/getEpisode', getData);
export const getEpisodeById = createAsyncThunk('episodes/getEpisodeById', getData);

const initialState = {
	list: {
		data: [],
		loading: false,
		refreshing: false,
		error: false,
	},
	detail: {},
}

const episodesSlice = createSlice({
	name: 'episodes',
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(getEpisodes.pending, state => (
				{
					...state,
					list: {
						...state.list,
						loading: !state.list?.data,
						refreshing: !!state.list?.data,
						error: null
					}
				}
			))
			.addCase(getEpisodes.fulfilled, (state, action) => (
				{
					...state,
					list: {
						...state.list,
						data: action.payload,
						loading: false,
						refreshing: false
					}
				}
			))
			.addCase(getEpisodes.rejected, state => (
				{
					...state,
					list: {
						...state.list,
						loading: false,
						refreshing: false,
						error: null
					}
				}
			))
			.addCase(getEpisodeById.pending, (state, action) => {
				const id = action.meta.arg;
				state.detail = {
					...state.detail,
					[id]: {
						...state?.detail?.[id],
						loading: !state.detail[id]?.data,
						refreshing: !!state.detail[id]?.data,
						error: null,
					}
				};
			})
			.addCase(getEpisodeById.fulfilled, (state, action) => {
				const id = action.meta.arg;
				state.detail = {
					...state.detail,
					[id]: {
						data: action.payload,
						loading: false,
						refreshing: false
					}
				};
			})
			.addCase(getEpisodeById.rejected, (state, action) => {
				const id = action.meta.arg;
				state.detail = {
					...state.detail,
					[id]: {
						...state?.detail?.[id],
						loading: false,
						refreshing: false,
						error: action.error.message
					}
				};
			});
	},
});

export default episodesSlice.reducer;
