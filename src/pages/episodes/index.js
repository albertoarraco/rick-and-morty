import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {getEpisodeById, getEpisodes} from "../../reducers/episodes";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import ListComponent from "../../components/list";
import {persistor} from "../../store/configureStore";

const EpisodesPage = () => {
	const dispatch = useDispatch();
	const {id} = useParams();
	const {list, detail} = useSelector(state => state.episodes, shallowEqual)

	useEffect(() => {
		if(!id) {
			dispatch(getEpisodes());
		} else {
			dispatch(getEpisodeById(id));
		}
	}, [id])

	if(id && detail?.id) {
		const {data, loading, refreshing, error} = detail?.[id];
		if(loading || refreshing) {
			return <h1>Loading episode...</h1>
		}
		const {air_date, name, episode, characters} = data;
		return <div>
			<h1>{name}</h1>
			<p><b>Air date: {air_date}</b></p>
		</div>
	}

	return <ListComponent type={'episodes'} {...list} />
}

export default EpisodesPage;
