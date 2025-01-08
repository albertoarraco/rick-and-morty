import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {getEpisodeById, getEpisodes} from "../../reducers/episodes";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import ListComponent from "../../components/list";
import {persistor} from "../../store/configureStore";
import DetailEpisode from "./detail";

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

	if(id) {
		return <DetailEpisode episode={id} />
	}

	return <ListComponent type={'episodes'} {...list} />
}

export default EpisodesPage;
